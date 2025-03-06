create table if not exists country(
    id char(26) primary key,
    name varchar(100),
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);