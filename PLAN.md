## Overview

Build top down, starting with high level and add detail from most important to least important. We want implementation to be as organized as possible and support flexibility as project specifics change. Build things that have the least likelihood to change first.

**Ordered**
1. Testing (Ongoing)
2. CI/CD (Minimal setup as soon as possible)
3. Schema design
4. DB Integration
5. Authentication
6. Backend API Layer
7. Mobile Framework
8. Billing
9. Onboarding
10. Messaging & Notifications
11. Profile matching
12. Profile filtering
13. Profile reporting & blocking
14. Content moderation
15. Analytics and reporting
16. Logging, error tracking, performance monitoring

## Schema Design

**types**
1. User
2. Message
3. Conversations
4. Connections
5. Questions

**tables**
1. User: Stores the profile information for each user
2. Questions: Stores the question options themselves
3. User Questions: Stores the question answer pairs for each user
4. Connections: Tracks relationships between users (pending & successful connections, blocks, etc.)
5. Conversations: Created when a connection is accepted and groups messages together
6. Messages: Individual messages within a conversation.

### Types

**User**
- id: UUID
- created_at: datetime
- name: string
- birthday: date
- gender: string enum (male, female)
- location: geography(Point) — PostGIS, stores lat/lng
- about: string
- photo_url: string
- is_active: boolean

## Mobile Framework

ReactNative for cross platform support?

## DB Integration

Supabase for Postgres and pgvector support?

## Authentication

Supabase Auth?

## Messaging & Notifications

Supabase for real-time?

## Billing

RevenueCat?

## Profile Matching

Match by age and distance/location filters first. Then rank profiles by question/answer similarity? Not sure if that is necessary, especially in the early stage because there won't be that many users to start. Maybe something to explore once the user base has grown?
