import apiClient from "./axios";

export function getReviewImageUrl(reviewId) {
  return apiClient.getUri({ url: "/review/image", params: { reviewId } });
}

export function writeReview(formData) {
  return apiClient.post("/review/write", formData);
}

// 반환값: { pager, data }
export  function getReviewList(pageNo = 1) {
  return apiClient.get("/review/list", {
    params: { pageNo },
  });

}

export function reviewDetail(reviewId){
  return apiClient.get("/review/detail",{
    params : {reviewId}
  })
}
