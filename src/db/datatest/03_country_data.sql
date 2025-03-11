DELETE FROM country;


INSERT INTO
    Country (
        name,
        created_at,
        updated_at,
        deleted_at
    )
VALUES ('France', NOW(), NOW(), NULL),
    (
        'United States',
        NOW(),
        NOW(),
        NULL
    ),
    ('Germany', NOW(), NOW(), NULL),
    (
        'United Kingdom',
        NOW(),
        NOW(),
        NULL
    ),
    ('Canada', NOW(), NOW(), NULL),
    (
        'Australia',
        NOW(),
        NOW(),
        NULL
    ),
    ('Spain', NOW(), NOW(), NULL),
    ('Italy', NOW(), NOW(), NULL),
    (
        'Netherlands',
        NOW(),
        NOW(),
        NULL
    ),
    ('Japan', NOW(), NOW(), NULL);