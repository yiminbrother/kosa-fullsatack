package com.mycompany.demo.database.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mycompany.demo.database.dao.BoardDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Board;

@Service 
public class ReviewService {

    private final BoardDao boardDao;

    public ReviewService(BoardDao boardDao) {
        this.boardDao = boardDao;
    }

    public int pagingTotalRows(Map<String,Object> where) {
        return boardDao.selectCount(where);
    }

    public List<Board> listReview(Pager pager, Map<String,Object> where) {
        return boardDao.selectPage(pager, where);
    }

}
