create table if not exists "user" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(100),
    contact varchar(100),
    email varchar(100),
    adress varchar(10),
    image_url varchar(100),
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);