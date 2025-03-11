-- Host
DELETE FROM host;
INSERT INTO
    Host(
        name,
        description,
        created_at,
        updated_at,
        deleted_at
    )
VALUES (
        'TechCorp',
        'Leading technology company hosting the Tech Conference.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'MusicLive',
        'Organizers of international music festivals.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'StartupWorld',
        'Platform for startups and investors.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'AI Global',
        'Leading AI research and development group.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'GourmetExpo',
        'Organization behind the world food exhibition.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'SportsMania',
        'Hosts global sports events.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'EduCon',
        'Educational conferences and summits organizer.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'FashionWeek',
        'Leading fashion show event organizer.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'AutoFest',
        'Organizes automobile exhibitions.',
        NOW(),
        NOW(),
        NULL
    ),
    (
        'GamingLeague',
        'Hosts global gaming tournaments.',
        NOW(),
        NOW(),
        NULL
    );