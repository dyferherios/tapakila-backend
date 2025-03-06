create table if not exists "event"(
    id char(26) primary key,
    event_hall_id char(26) references event_hall(id) on delete cascade,
    host_id char(26) references host(id) on delete cascade,
    user_id char(26) references "user"(id) on delete cascade,
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