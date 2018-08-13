/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('doc1.html', language)}>Documents</Button>
            <Button href={docUrl('doc3.html', language)}>WEB-DEV</Button>
            <Button href={docUrl('doc4.html', language)}>Search-API</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Engine = props => (
  <Block background="dark">
    {[
      {
        content: '엔진(Engine)은 OAIS 참조 모델과 Moreq2010 프로세스 기반으로 서울기록원을 위해 새롭게 개발된 오픈소스 디지털 아카이브 영구보존시스템입니다. 마이크로 서비스 아키텍쳐(Microservice Architecture) 디자인 패턴으로 설계되어 기록의 보존과 서비스를 함께 진행할 수 있으며, 각각 독립된 시스템이 마치 하나의 서버로 구성되어 운영되는 것처럼 지속적으로 피드백을 적용할 수 있고 기록 관리 업무 프로세스가 연결되는 장점을 가지고 있습니다. 엔진(Engine)은 2차년도 개발을 진행중입니다. 현재는 서울기록원 직원으로 접근을 제한하고 있습니다. 업무 등의 용무로 엔진(Engine) 접근이 필요하신 경우, 위의 담당자에게 이메일로 문의해 주시기 바랍니다.',
        image: imgUrl('engine_capture.png'),
        imageAlign: 'left',
        title: '서울기록원 디지털 아카이브 보존시스템 엔진(Engine)',
      },
    ]}
  </Block>
);

const WEB = props => (
  <Block background="light">
    {[
      {
        content: '서울기록원 디지털 아카이브를 서비스하는 웹(WEB)은 쉽게 이해하고 사용할 수 있도록 설계되었습니다. 검색, 탐색 등 제공되는 메뉴를 테스트해 보세요. 웹을 이용하시다가 오류라고 생각되는 부분을 발견하신다면 화면 오른쪽 아래편에 마련된 오류신고를 눌러 의견을 남겨주세요. 보내주신 오류 신고와 서비스에 대한 의견은 웹의 개발과 개선에만 활용됩니다. 웹(web)의 소스는 깃허브(Github)에 공개하였습니다. 이어지는 개발과 개선 과정에서도 적극적으로 깃허브를 활용할 예정입니다',
        image: imgUrl('web_capture_half.png'),
        imageAlign: 'right',
        title: '서울기록원 디지털 아카이브 서비스시스템 웹(WEB)',
      },
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Engine />
          <WEB />
        </div>
      </div>
    );
  }
}

module.exports = Index;
