create table if not exists "event"(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_hall_id UUID references event_hall(id) on delete cascade,
    host_id UUID references host(id) on delete cascade,
    user_id UUID references "user"(id) on delete cascade,
    title varchar(250) ,
    slug varchar(250),
    description text,
    start_date date,
    start_time time,
    end_date date,
    end_time time, 
    age_limit varchar(2),
    created_at timestamp,
    updated_at timestamp,
    deleted_at timestamp
);