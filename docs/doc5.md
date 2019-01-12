---
id: doc5
title: WEB 개발 문서
sidebar_label: WEB 개발 문서
---

서울기록원의 WEB-Application 개발 문서입니다. 개발 이력과 Application 개발에 필요한 필수 정보를 작성해 나가고 있습니다. 
[마크다운사용법 확인하기](https://docusaurus.io/docs/en/doc-markdown)

[서울기록원 WEB 사용자 여정지도-2018년 여름](https://drive.google.com/file/d/10UPkKA-_hXf4WGp5cQR8AyUPR4LSAn42/view?usp=sharing)

## 서비스시스템 WEB 사용자 구분

2017년 서비스시스템의 WEB 사용자 구분은 아래의 4개 그룹으로 구분했다. 

* 게스트 사용자(게스트) : 로그인 하지 않고 SDA-WEB에서 조회, 탐색, 검색 등 시스템을 사용하는 일반 사용자.
* 로그인 사용자(회원) : 회원가입 및 로그인을 통해 SDA-WEB에서 조회(탐색, 검색) 등의 시스템을 포함해 개인화된 페이지를 사용하는 일반 사용자.
* 서울기록원 관리자(관리자) : 슈퍼관리자가 지정한 로그인 사용자 중에 SDA-WEB에서 시스템 조작(관리자 기능)을 관리할 수 있는 서울기록원의 SDA-WEB 담당자(10명 ~ 20명)
* 서울기록원 슈퍼관리자(슈퍼관리자): 시스템에서 지정한 로그인 사용자 중에 서울기록원 관리자를 지정하고, 콘텐츠 최종 삭제 기능 권한을 소유한 SDA-WEB 개발 담당자 (1명 ~ 2명)

게스트 및 회원의 대상이 될 수 있는 실제 사용자에 대해서는 무작위의 서울시민을 대상으로 하지 않았다. 서울기록원에서 제공하는 서울시의 공개된 기록에 대해서 관심갖고 들여볼 1차 사용자가 될 수 있는 연구/조사자를 실제 사용자로 고려하고 서비스를 개발했다. 


## WEB Application 구성 및 소개

* 검색엔진 
* WEB Application : Java, JSP
* 사용자 이메일 Notification Service


## 데이터 연계 with Engine

서비스시스템은 폐쇄망에서 사용되는 보존시스템 Engine과의 연계를 위해서 Engine 서버가 WEB의 웹서버에 제공한 기록과 관련된 정보를 담은 DB를 Json 형태로 제공한다.  또한 기록의 원본파일은 보존서비스 포맷으로 함께 제공한다. WEB은 이 정보를 기반으로 데이터를 사용자에게 제공할 수 있는 DB로 만들어 서비스를 제공한다.

기록과 관련된 정보 테이블 목록을 Json 파일로 받은 형태

* AD_CODE_DETAIL_20180929.json

* AD_CODE_HEADER_20180929.json

* CL_CLASS_20180917.json

* CL_CLASS_CON_20180917.json

* CL_CLASSIFICATION_SCHEME_20180917.json

* CL_CLASSIFICATION_SCHEME_CON_20180917.json

* CL_CLASSIFY_RECORDS_RESULT_20181211.json

* AT_AUTHORITY_20181211.json

* RC_LEVEL_20180917.json

* RC_AGGREGATION_20181211.json

* RC_AGGREGATION_CON_20181211.json

* RC_AGGREGATION_CREATOR_20181211.json

* RC_ITEM_20181211.json

* RC_ITEM_CON_20181211.json

* RC_ITEM_CREATOR_20181211.json

* RC_COMPONENT_20181211.json

* RC_ITEM_COMPONENT_20181211.json
