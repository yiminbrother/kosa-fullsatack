import apiClient from "./axios";

// 반환값: { pager, data }
export  function getReviewList(pageNo = 1) {
  return apiClient.get("/review/list", {
    params: { pageNo },
  });

}
