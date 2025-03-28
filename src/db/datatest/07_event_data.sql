INSERT INTO
    event (
        event_hall_id,
        host_id,
        user_id,
        title,
        slug,
        description,
        start_date,
        start_time,
        end_date,
        end_time,
        age_limit,
        created_at,
        updated_at,
        deleted_at
    )
VALUES (
        'f63d84e3-33b7-4274-8244-85e6f9c18060',
        'b21b739f-c51f-40ac-90ce-229b4d084f0f',
        '552648f0-e00d-4724-ac24-9c4d4b0c6d7e',
        'Tech Conference 2025',
        'tech-conf-2025',
        'A global technology conference.',
        '2025-09-01',
        '09:00:00',
        '2025-09-03',
        '18:00:00',
        18,
        NOW(),
        NOW(),
        NULL
    ),
    (
        '07a58f7c-14aa-4808-80aa-3bb474ac59b6',
        '3763595f-0946-4844-96dc-2d8ca55bbc49',
        '333022ea-46a4-4b72-bae7-5ab939242d78',
        'Music Fest',
        'music-fest-2025',
        'A grand music festival.',
        '2025-07-20',
        '14:00:00',
        '2025-07-22',
        '23:00:00',
        16,
        NOW(),
        NOW(),
        NULL
    ),
    (
        '6d74a3c9-9f6f-402a-a48d-01555eef8c79',
        '802cff6e-c841-49cd-973a-01ae0404d973',
        '333022ea-46a4-4b72-bae7-5ab939242d78',
        'Startup Expo',
        'startup-expo-2025',
        'A showcase of startups.',
        '2025-06-15',
        '10:00:00',
        '2025-06-17',
        '17:00:00',
        18,
        NOW(),
        NOW(),
        NULL
    ),
    (
        'de927c0d-0807-44db-9213-f07a3d6da350',
        '15d1407e-c148-4bc6-8f8b-ffe8bae4465c',
        'c2b936f5-2022-4373-8ea0-ab22492af09b',
        'AI Summit',
        'ai-summit-2025',
        'AI and Machine Learning conference.',
        '2025-11-10',
        '08:00:00',
        '2025-11-12',
        '17:00:00',
        18,
        NOW(),
        NOW(),
        NULL
    ),
    (
        'ed4b241c-346c-467a-b080-14c495042d6e',
        '0e824b07-36cd-4ba1-8891-3390d9d99dd8',
        'ed1236cd-01c4-41ae-817e-65143014d0ee',
        'Food Expo',
        'food-expo-2025',
        'A global food exhibition.',
        '2025-05-05',
        '09:00:00',
        '2025-05-07',
        '20:00:00',
        0,
        NOW(),
        NOW(),
        NULL
    );