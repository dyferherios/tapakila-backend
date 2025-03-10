INSERT INTO
    Newsletter (
        name,
        email,
        created_at,
        updated_at,
        deleted_at
    )
VALUES (
        'Alice',
        'alice@example.com',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'Bob',
        'bob@example.com',
        NOW(),
        NOW(),
        NULL
    );