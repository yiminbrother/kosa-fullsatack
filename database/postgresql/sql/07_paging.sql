-- board 게시물을 게시물 번호 내림차순으로 정렬하여 페이징
-- 페이지당 행수: 10, 페이지 번호: 1
-- 건너뛸 행수 = (페이지 번호 - 1) * 페이지당 행수
SELECT board_id, title, content, writer, writed_at, product_id
FROM board
WHERE product_id <= 100
ORDER BY board_id DESC
LIMIT 10 OFFSET (1 - 1) * 10;

-- ROW_NUMBER()를 사용한 페이징: 페이지당 10행, 1페이지
-- 정렬 기준으로 행 번호를 부여하고, 바깥 쿼리에서 시작/종료 범위를 적용
SELECT board_id, title, content, writer, writed_at, product_id
FROM (
    SELECT board_id, title, content, writer, writed_at, product_id,
           ROW_NUMBER() OVER (ORDER BY board_id DESC) AS rn
    FROM board
) AS numbered_board
WHERE rn > (1 - 1) * 10
  AND rn <= 1 * 10
ORDER BY rn;