DELETE FROM role;

INSERT INTO
    Role (title, created_at, updated_at)
VALUES ('Admin', NOW(), NOW()),
    ('Organizer', NOW(), NOW()),
    ('Attendee', NOW(), NOW()),
    ('Vendor', NOW(), NOW()),
    ('Speaker', NOW(), NOW()),
    ('Volunteer', NOW(), NOW()),
    ('Moderator', NOW(), NOW()),
    ('Sponsor', NOW(), NOW()),
    ('Guest', NOW(), NOW()),
    ('Press', NOW(), NOW());