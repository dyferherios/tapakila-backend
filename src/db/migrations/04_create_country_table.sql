create table if not exists country(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(100),
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);