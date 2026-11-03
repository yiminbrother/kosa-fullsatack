-------------------------------------
-- 모든 컬럼의 값을 가져오기
select *
from board
where board_id <= 5;
-------------------------------------
-- 특정 컬럼의 값을 가져오기
select board_id, title, writer
from board
where board_id <= 5;
-------------------------------------
-- 정렬해서 가져오기
select board_id, title, writer
from board
where board_id <= 5
order by board_id desc;
-------------------------------------
-- 1차정렬, 2차정렬해서 가져오기
select *
from order_item
where order_id <= 3
order by order_id asc, product_id desc;
-------------------------------------
-- 행의 개수 얻기
select count(*)
from order_item;
-- 값의 개수(null 제외)
select count(email)
from member;

-------------------------------------
-- 그룹핑하기
select order_id, count(product_id)
from order_item
where order_id <= 3
group by order_id;
-- 집계 함수, 이전의 모든 컬럼은 group by에 있어야함
select order_id, product_id, count(*)
from order_item
where order_id <= 3
group by order_id, product_id;
-- 여러 컬럼을 계한 후, 집계하기 
select order_id, sum(quantity * unit_price)
from order_item
where order_id <= 3
group by order_id;
-------------------------------------
-- 집계 결과에 조건달기
select order_id, sum(quantity * unit_price)
from order_item
where order_id <= 3
group by order_id
having sum(quantity * unit_price) >= 10000;
