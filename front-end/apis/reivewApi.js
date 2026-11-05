import apiClient from "./axios";

// 반환값: { pager, data }
export  function getBoardList(pageNo = 1) {
  return apiClient.get("/review/list-board", {
    params: { pageNo },
  });

}
