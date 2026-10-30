-- board 전체 행을 게시물 번호 내림차순으로 정렬하여 페이징
-- 페이지당 행수: 10, 페이지 번호: 1
-- 건너뛸 행수 = (페이지 번호 - 1) * 페이지당 행수
SELECT board_id, title, content, writer, writed_at, product_id
FROM board
WHERE product_id <= 100
ORDER BY board_id DESC
OFFSET (1 - 1) * 10 ROWS
FETCH NEXT 10 ROWS ONLY;

-- ROWNUM을 사용한 페이징: 페이지당 10행, 1페이지
-- 정렬 후 ROWNUM을 부여하고, 바깥 쿼리에서 시작 범위를 적용
SELECT board_id, title, content, writer, writed_at, product_id
FROM (
    SELECT b.*, ROWNUM AS rn
    FROM (
        SELECT board_id, title, content, writer, writed_at, product_id
        FROM board
        ORDER BY board_id DESC
    ) b
    WHERE ROWNUM <= 1 * 10
)
WHERE rn > (1 - 1) * 10
ORDER BY rn;
