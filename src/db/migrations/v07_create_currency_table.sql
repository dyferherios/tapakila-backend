create table if not exists currency(
    id char(26) primary key,
    title varchar(100),
    description text,
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);