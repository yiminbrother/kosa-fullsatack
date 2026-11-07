package com.mycompany.demo.database.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewUpdateRequest {
    private long reviewId;
    private String title;
    private String content;
    private MultipartFile file;
    private boolean deleteFile;
}
