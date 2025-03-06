create table if not exists "event"(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_name varchar(250) ,
    event_date date,
    event_description text,
    event_hall_id UUID references event_hall(id) on delete cascade,
    start_time time,
    end_time time,
    all_reservation varchar(100)[],
    number_of_tickets_to_sell_with_type bigint check (number_of_tickets_to_sell_with_type >= 0),
    organisateur varchar(100)[]
);