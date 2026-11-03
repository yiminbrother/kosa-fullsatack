-------------------------------------------------------------
-- member 테이블에 데이터 저장
-------------------------------------------------------------
-- 완전한 커럼 리스트와 값을 저정
-- insert into member (member_id, member_name, password, email, joined_at)
-- values ('user01', '홍길동', 'abc12345', 'user01@example.com', CURRENT_TIMESTAMP);
-- -- BEGIN으로 시작한 트랜잭션을 확정(취소: ROLLBACK, 기본 자동 커밋)
-- commit;

-- 컬럼 리스트 생략
-- insert into member
-- values ('user02', '홍길동', 'abc12345', 'user02@example.com', CURRENT_TIMESTAMP);
-- commit;

-- 기본값을 갖는 컬럼은 생략가능
-- insert into member (member_id, member_name, password, email)
-- values ('user03', '홍길동', 'abc12345', 'user03@example.com');
-- commit;

-- -- null을 가질 수 있는 컬럼은 생략 가능 
-- insert into member (member_id, member_name, password, email)
-- values ('user04', '홍길동', 'abc12345', null);

-- insert into member (member_id, member_name, password)
-- values ('user05', '홍길동', 'abc12345');
-- commit;

-------------------------------------------------------------
-- seller 테이블에 데이터 저장
-------------------------------------------------------------
-- 자동 증가 컬럼은 반드시 생략
-- insert into seller(seller_name, email, phone) 
-- values ('홍길동', 'hong1@company.com', '01012341234');

-- insert into seller(seller_name, email, phone) 
-- values ('홍길남', 'hong2@company.com', '01012341235');

-- commit;

-------------------------------------------------------------
-- 전체 테이블에 샘플 데이터를 생성
-------------------------------------------------------------

-- 테스트 데이터: 테이블마다 100개씩, 총 600개.
-- 01_create_table.sql 실행 후 빈 테이블에서 한 번 실행합니다. 숫자 ID는 자동 생성됩니다.
-- Password values are demonstration data.

BEGIN;


-- member : 예시 데이터 100개
INSERT INTO member (member_id, member_name, password, email, joined_at)
SELECT 'user' || n, 'Member ' || n, 'abc12345',
       'user' || n || '@example.com', DATE '2026-01-01' + MOD(n - 1, 270)
FROM generate_series(1, 100) AS sample(n);

-- seller : 예시 데이터 100개
INSERT INTO seller (seller_name, email, phone, registered_at)
SELECT 'seller' || n, 'seller' || n || '@example.com',
       '010' || LPAD(n::text, 8, '0'), DATE '2026-01-01' + MOD(n - 1, 90)
FROM generate_series(1, 100) AS sample(n);

-- product : 예시 데이터 100개
INSERT INTO product (product_name, price, seller_id)
SELECT 'product' || n, 1000 + MOD(n * 137, 199000), s.seller_id
FROM generate_series(1, 100) AS sample(n)
JOIN seller s ON s.email = 'seller' || (MOD(n - 1, 100) + 1) || '@example.com';

-- orders : 예시 데이터 100개
INSERT INTO orders (member_id, ordered_at)
SELECT 'user' || (MOD(n - 1, 100) + 1),
       TIMESTAMP '2026-10-01 09:00:00' + (n - 1) * INTERVAL '1 minute'
FROM generate_series(1, 100) AS sample(n);

-- order_item : 예시 데이터 100개
INSERT INTO order_item (order_id, product_id, quantity, unit_price)
SELECT o.order_id, p.product_id, MOD(o.n - 1, 5) + 1, p.price
FROM (SELECT order_id, ROW_NUMBER() OVER (ORDER BY order_id) AS n FROM orders) o
JOIN product p ON p.product_name = 'product' || (MOD(o.n - 1, 100) + 1);

-- board : 예시 데이터 100개
INSERT INTO board (title, content, writer, writed_at, product_id)
SELECT 'Sample review ' || n,
       'Sample review content for product ' || (MOD(n - 1, 100) + 1),
       'user' || (MOD(n - 1, 100) + 1),
       DATE '2026-10-02' + MOD(n - 1, 20), p.product_id
FROM generate_series(1, 100) AS sample(n)
JOIN product p ON p.product_name = 'product' || (MOD(n - 1, 100) + 1);

COMMIT;

-- 실행 결과 확인: 각 테이블 100개, 총 600개
SELECT 'member' AS table_name, COUNT(*) AS row_count FROM member
UNION ALL SELECT 'seller', COUNT(*) FROM seller
UNION ALL SELECT 'product', COUNT(*) FROM product
UNION ALL SELECT 'orders', COUNT(*) FROM orders
UNION ALL SELECT 'order_item', COUNT(*) FROM order_item
UNION ALL SELECT 'board', COUNT(*) FROM board;