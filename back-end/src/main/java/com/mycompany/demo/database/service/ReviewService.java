package com.mycompany.demo.database.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mycompany.demo.database.dao.ReviewDao;
import com.mycompany.demo.database.dto.Pager;
import com.mycompany.demo.database.entity.Review;

@Service 
public class ReviewService {

    private final ReviewDao reviewDao;

    public ReviewService(ReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    public int pagingTotalRows(Map<String,Object> where) {
        return reviewDao.selectCount(where);
    }

    public List<Review> listReview(Pager pager, Map<String,Object> where) {
        return reviewDao.selectPage(pager, where);
    }

    public int write(Review review) {
        return reviewDao.insert(review);
    }

    public Review getReview(long reviewId) {
        return reviewDao.selectById(reviewId);
    }
    public int update(Review review){
        return reviewDao.update(review);
    }

    

}
