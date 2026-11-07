package com.mycompany.demo.database.controller;

// import static org.mockito.ArgumentMatchers.contains;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.mycompany.demo.database.dto.ReviewListItemResponse;
import com.mycompany.demo.database.dto.ReviewUpdateRequest;
import com.mycompany.demo.database.dto.ReviewUpdateResponse;
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

    @GetMapping("/detail")
    public ReviewDetailResponse detail(@RequestParam("reviewId") long reviewId) {

        Review review = reviewService.getReview(reviewId);
        // review가 null이 될수가없을수도?
        // if (review == null) {
        // throw new ResponseStatusException(HttpStatus.NOT_FOUND, "후기를 찾을 수 없습니다.");
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

    @GetMapping("/file")
    public ResponseEntity<byte[]> file(@RequestParam("reviewId") long reviewId) {

        // DB에 해당 reviewId의 행을 읽고 엔티티로 반환
        Review review = reviewService.getReview(reviewId);

        // 해당 게시물 첨부가 없을 경우
        if (review == null || review.getFileData() == null) {
            // 404 응답
            return ResponseEntity.notFound().build();
        }

        // 해당 게시물에 첨부가 있을 경우
        String fileName = review.getFileName();
        if (fileName == null || fileName.isBlank()) {
            fileName = "attachment";
        }
        // }
        // 기본 MIME Type을 APPLICATION_OCTET_STREAM로 설정
        // MediaType mediaType = MediaType.APPLICATION_OCTET_STREAM;

        // List<String> list = List.of("image/jpeg", "image/png", "image/gif", "image/webp", "image/avif", "image/bmp");
        
        // // 첨부가 이미지일 경우라면 
        // if (list.contains(type.toLowerCase())) {
        //     // MediaType으로 갱신 
        //     mediaType = MediaType.parseMediaType(type);
        // }
        String type = review.getFileType();
        MediaType mediaType = MediaType.parseMediaType(type);
        // 200 응답(성공적)
        return ResponseEntity.ok() // 성공적인 응답
                .contentType(mediaType) // header에 contenttype담기 
                .header(HttpHeaders.CONTENT_DISPOSITION, ContentDisposition.attachment() // 응답 헤더에 Content-Disposition 헤더 값으로 들어갈 문자열 
                        .filename(fileName, StandardCharsets.UTF_8)// 파일이름에 한글이 포함된경우, 한글을 인코딩 
                        .build().toString())
                // .header("X-Content-Type-Options", "nosniff")
                
                // 서버가 지정한 contentType으로 따르도록 하는 보안헤더 
                // .header("X-Content-Type-Options", "nosniff") 누가 장난칠수있기때문에 넣음
                .body(review.getFileData());
    }


     // POST /review/write: 상품 후기 등록 엔드포인트 (등록 로직은 추후 구현)
    @PatchMapping("/update")
    public ReviewUpdateResponse update(ReviewUpdateRequest request) throws IOException {
        // Review 엔티티로 변환
        Review review = new Review();
        review.setReviewId(request.getReviewId());
        review.setTitle(request.getTitle());
        review.setContent(request.getContent());
        if(request.isDeleteFile()){
            review.setFileName("delete");
        }
        
        if (request.getFile() != null && !request.getFile().isEmpty()) {
            review.setFileName(request.getFile().getOriginalFilename());
            review.setFileType(request.getFile().getContentType());
            review.setFileData(request.getFile().getBytes());
        }
        // 서비스로 엔티티 전달해서 글쓰기
        int rows = reviewService.update(review);

        ReviewUpdateResponse response = new ReviewUpdateResponse();
        response.setStatus("success");
        return response;
    }
}
