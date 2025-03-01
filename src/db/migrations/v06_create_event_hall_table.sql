create table if not exists event_hall(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name varchar(100),
    description text
);