# Product Overview — Meltt

## What Meltt Is
Meltt is a **location-based, real-world dating app**.

Users can only discover, match, and chat with others when they are
**physically present in the same real-world place**.

This is not a couch dating app.

---

## Core Principles
- Location is the heart of the app
- No remote swiping or browsing
- Physical presence is verified
- Events and venues are first-class concepts
- Safety and privacy are mandatory

---

## Core Concepts

### Venues
A venue is a physical place:
- bar, club, hostel, gym, festival location

Venues define:
- GPS center (lat/lng)
- Check-in radius (meters)

---

### Events
Events:
- are admin-created
- happen at a venue
- have a start and end time

Examples:
- party
- concert
- meetup
- festival day

Events are optional — venues can exist without events.

---

### Spaces (Key Abstraction)
A **space** is where real-time interaction happens.

Types:
- **Venue space** → always-on (e.g. hostel, gym)
- **Event space** → time-boundeparty)

Everything happens inside a space:
- presence
- swipes
- matches
- chat

---

## Check-In (MVP)
Users must:
1. Scan a QR code
2. Be within GPS radius of the venue
3. Pass server-side validation

QR proves intent.
Location proves presence.

---

## Presence
Being "checked in" means:
- user has an active `space_presence`
- user can see and be seen
- user can swipe

MVP only supports a simple `is_visible` boolean.

---

## Going (Pre-Event)
Users can mark themselves as **going** to an event before it starts.
This is not presence.

Purpose:
- anticipation
- future PRO features
- planning

---

## Interaction
- Swipes only exist inside a space
- Like or pass
- Mutual likes → match → chat

### Match Lifecycle
- Matches expire **24 hours** after creation (`matched_at + 24h`)
- All matches expire (venue + event), regardless of chat activity
- Expired matches → chat is locked (read-only), match hidden from Messages tab
- Soft expiry: data stays in DB, filtered at query time (enables future premiuce" feature)

### Like Lifecycle
- Event spaces: likes expire at `space.ends_at + 1 hour` (grace period)
- Venue spaces: likes never expire
- During grace period: users can only return existing likes (no new likes), must be physically near the venue

---

## Safety
- Users can block each other
- Users can report others
- Blocked users must never appear or interact

---

## Explicitly Out of Scope (for MVP)
- Remote browsing
- Ghost / power modes
- Auto check-in without QR
- Subscription billing
