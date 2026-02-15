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
13. Analytics and reporting
14. Logging, error tracking, performance monitoring

**Unordered**
- Profile filtering
- Report/Block profile
- Content Moderation

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

## Schema Design

1. Users
2. Messages
3. Conversations
4. Connections
5. Questions

## Profile Matching

Match by age and distance/location filters first. Then rank profiles by question/answer similarity? Not sure if that is necessary, especially in the early stage because there won't be that many users to start. Maybe something to explore once the user base has grown?
