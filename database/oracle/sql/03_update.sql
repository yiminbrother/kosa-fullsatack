update member
set 
    member_name='홍길서',
    password='abc54321'
where
    -- member_id='user1'
    -- member_id like '%user10%'
    -- member_id like '%user10%' and email='user1000@example.com'
    member_id like '%user20%' or email='user1000@example.com'
;

commit;
-----------------------------------------------
update product
set price = price + 10
where price <= 2000;  -- <, >, <=, >=, ==, !=

commit;
-----------------------------------------------
-- NULL 값을 수정하거나 조건으로 사용
update member
set email = null
where member_id = 'user1';
commit;

update member
set email = 'abc@mycompany.com'
where email is null;  -- is not null
commit;
----------------------------------------------
-- 날짜를 조건으로해서 날짜를 수정
-- '년.월.일', '년-월-일', '년/월/일'
update member
set joined_at = '2026/01/05'
where joined_at < '2026/01/10';
commit;