import apiClient from "./axios";



export function writeReview(formData) {
  return apiClient.post("/review/write", formData);
}

// 반환값: { pager, data }
export  function getReviewList(pageNo = 1) {
  return apiClient.get("/review/list", {
    params: { pageNo },
  });

}

// 상세페이지 
export function reviewDetail(reviewId){
  return apiClient.get("/review/detail",{
    params : {reviewId}
  })
}

// 이미지 url 가져오기 
export function getReviewFileUrl(reviewId) {
  //그냥 uri만 만들고 통신하지않음
  return apiClient.getUri({ url: "/review/file", params: { reviewId} });
}

export function reviewUpdate(reivew){
  return apiClient.patch("/review/update",reivew)
}