-------------------------------------
-- 여러 테이블을 연결해서 데이터 가져오기(조인)
-- 조건: 테이블간에 연결선(PK-FK)이 존재
select member_name, title
from member, board
where member.member_id = board.writer and member.member_id='user1';

-------------------------------------
-- 연결된 테이블에 공통적으로 존재하는 컬럼은 반드시 어떤 테이블에서 가져올 지를 언급
select member.member_id, member_name, order_id, ordered_at
from member, orders
where
    member.member_id = orders.member_id and
    member.member_id = 'user1';

select m.member_id, member_name, order_id, ordered_at
from member m, orders o
where
    m.member_id = o.member_id and
    m.member_id = 'user1';

-------------------------------------
select product_name, seller_name, title, member_name
from product p, seller s, board b, member m
where
    b.product_id = p.product_id and
    p.seller_id = s.seller_id and
    m.member_id = b.writer and
    p.product_id = 1;