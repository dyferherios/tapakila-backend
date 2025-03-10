INSERT INTO
    ticket_verification (
        ticket_id,
        user_id,
        payment_confirmed,
        created_at,
        updated_at,
        deleted_at
    )
VALUES (
        '15c55a97-29d1-4921-aa60-d58b21689d2e',
        '9741f818-4a44-4a89-a6af-8d9b5569999f',
        TRUE,
        NOW(),
        NOW(),
        NULL
    ),
    (
        '9917495e-770c-4973-a910-fb57a257003e',
        '9741f818-4a44-4a89-a6af-8d9b5569999f',
        TRUE,
        NOW(),
        NOW(),
        NULL
    );