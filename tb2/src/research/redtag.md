---
title: RedTag

description: Hardware solution for capturing content based meta-data. It records time synced meta-data onto the camera.
image: /images/redtag.png

date: 06/2014

publications:
  - Bartindale201419
---

# RedTag

RedTag is a custom hardware solution to capture context based metadata to cameras during filming. Each low-cost Tag emits a unique ID which is picked up by receivers mounted on each camera. Tag ID’s are only received when in the same focal range as the camera, and emitted as DTMF audio tones which can be recorded as a secondary audio track directly onto the camera.

In post-processing, a simple piece of software strips the secondary audio, decoding it into time stamped metadata. Tags can last more many months, and used in variety of scenarios including in conference badges (as deployed at DIS and Pervasive 2012), in set dressing and props, and as indoor-localisation tags.

Technologies:

- Custom PCB, hardware
- Various scripting tools to process data
