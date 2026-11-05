package com.mycompany.demo.database.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.demo.database.dto.BoardListItemResponse;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Board;
import com.mycompany.demo.database.service.ReviewService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor 
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/list-board")
    public Map<String, Object> listMember(@RequestParam(value = "pageNo", defaultValue = "1") int pageNo) {
      
        Map<String, Object> where = null;
        int totalRows = reviewService.pagingTotalRows(where);

        Pager pager = new Pager(10, 5, totalRows, pageNo);

        List<Board> list = reviewService.listReview(pager, where);
        List<BoardListItemResponse> listBoardResponse = new ArrayList<>();

        for (Board dbBoard : list) {
            BoardListItemResponse boardResponse = new BoardListItemResponse();
            boardResponse.setBoardId(dbBoard.getBoardId());
            boardResponse.setTitle(dbBoard.getTitle());
            boardResponse.setWriter(dbBoard.getWriter());
            boardResponse.setWritedAt(dbBoard.getWritedAt());
            boardResponse.setProductId(dbBoard.getProductId());
            boardResponse.setFileName(dbBoard.getFileName());
            listBoardResponse.add(boardResponse);
        }

        Map<String, Object> map = Map.of(
                "pager", pager,
                "data", listBoardResponse);

        return map;
    }

}
