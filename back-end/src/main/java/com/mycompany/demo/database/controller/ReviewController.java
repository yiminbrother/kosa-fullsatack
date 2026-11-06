package com.mycompany.demo.database.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.mycompany.demo.database.dto.ReviewListItemResponse;
import com.mycompany.demo.database.dto.ReviewWriteRequest;
import com.mycompany.demo.database.dto.ReviewWriteResponse;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.dto.ReviewDetailResponse;
import com.mycompany.demo.database.entity.Review;
import com.mycompany.demo.database.service.ReviewService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;

    // POST /review/write: 상품 후기 등록 엔드포인트 (등록 로직은 추후 구현)
    @PostMapping("/write")
    public ReviewWriteResponse write(ReviewWriteRequest request) throws IOException {
        // Review 엔티티로 변환
        Review review = new Review();
        review.setTitle(request.getTitle());
        review.setContent(request.getContent());
        review.setWriter(request.getWriter());
        review.setProductId(request.getProductId());
        if (request.getFile() != null && !request.getFile().isEmpty()) {
            review.setFileName(request.getFile().getOriginalFilename());
            review.setFileType(request.getFile().getContentType());
            review.setFileData(request.getFile().getBytes());
        }
        // 서비스로 엔티티 전달해서 글쓰기
        int rows = reviewService.write(review);

        ReviewWriteResponse response = new ReviewWriteResponse();
        response.setStatus("success");
        return response;
    }

    @GetMapping("/list")
    public Map<String, Object> listMember(@RequestParam(value = "pageNo", defaultValue = "1") int pageNo) {

        Map<String, Object> where = null;
        int totalRows = reviewService.pagingTotalRows(where);

        Pager pager = new Pager(10, 5, totalRows, pageNo);

        List<Review> list = reviewService.listReview(pager, where);
        List<ReviewListItemResponse> listReviewResponse = new ArrayList<>();

        for (Review dbReview : list) {
            ReviewListItemResponse reviewResponse = new ReviewListItemResponse();
            reviewResponse.setReviewId(dbReview.getReviewId());
            reviewResponse.setTitle(dbReview.getTitle());
            reviewResponse.setWriter(dbReview.getWriter());
            reviewResponse.setWritedAt(dbReview.getWritedAt());
            reviewResponse.setProductId(dbReview.getProductId());
            reviewResponse.setFileName(dbReview.getFileName());
            listReviewResponse.add(reviewResponse);
        }

        Map<String, Object> map = Map.of(
                "pager", pager,
                "data", listReviewResponse);

        return map;
    }

    @GetMapping("/image")
    public ResponseEntity<byte[]> image(@RequestParam("reviewId") long reviewId) {
        Review review = reviewService.getReview(reviewId);
        if (review == null || review.getFileData() == null || review.getFileData().length == 0) {
            return ResponseEntity.notFound().build();
        }
        String fileType = review.getFileType();
        if (fileType == null || !List.of("image/jpeg", "image/png", "image/gif", "image/webp", "image/bmp", "image/avif").contains(fileType)) {
            return ResponseEntity.status(415).build();
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(fileType))
                .header("X-Content-Type-Options", "nosniff")
                .body(review.getFileData());
    }

    @GetMapping("/detail")
    public ReviewDetailResponse detail(@RequestParam("reviewId") long reviewId) {
        
        Review review = reviewService.getReview(reviewId);
        //review가 null이 될수가없을수도?
        // if (review == null) {
        //     throw new ResponseStatusException(HttpStatus.NOT_FOUND, "후기를 찾을 수 없습니다.");
        // }

        ReviewDetailResponse response = new ReviewDetailResponse();
        response.setReviewId(review.getReviewId());
        response.setTitle(review.getTitle());
        response.setContent(review.getContent());
        response.setWriter(review.getWriter());
        response.setProductId(review.getProductId());
        response.setFileName(review.getFileName());
        response.setWritedAt(review.getWritedAt());
        return response;
    }

}
