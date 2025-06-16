---
title: RedTag

description: Hardware solution for capturing content based meta-data. It records time synced meta-data onto the camera.
image: /images/redtag.png

date: 06/2014

publications:
  - |
    @CONFERENCE{Bartindale201419,
      author = {Bartindale, Tom and Jackson, Daniel and Ladha, Karim and Mellor, Sebastian and Olivier, Patrick and Wright, Peter},
      title = {RedTag: Automatic content metadata capture for cameras},
      year = {2014},
      journal = {TVX 2014 - Proceedings of the 2014 ACM International Conference on Interactive Experiences for TV and Online Video},
      pages = {19 – 22},
      doi = {10.1145/2602299.2602303},
      url = {https://www.scopus.com/inward/record.uri?eid=2-s2.0-84904459532&doi=10.1145%2f2602299.2602303&partnerID=40&md5=e03d29c9e7571da845d49eef0bf21c7f},
      type = {Conference paper},
      publication_stage = {Final},
      source = {Scopus},
      note = {Cited by: 3}
    }
---

# RedTag

RedTag is a custom hardware solution to capture context based metadata to cameras during filming. Each low-cost Tag emits a unique ID which is picked up by receivers mounted on each camera. Tag ID’s are only received when in the same focal range as the camera, and emitted as DTMF audio tones which can be recorded as a secondary audio track directly onto the camera.

In post-processing, a simple piece of software strips the secondary audio, decoding it into time stamped metadata. Tags can last more many months, and used in variety of scenarios including in conference badges (as deployed at DIS and Pervasive 2012), in set dressing and props, and as indoor-localisation tags.

Technologies:

- Custom PCB, hardware
- Various scripting tools to process data
