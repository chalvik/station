<!doctype html>
<html lang="en-US" class="no-js" itemtype="https://schema.org/WebPage" itemscope>

<head>
    @include('/site/inc/head')
</head>

<body class="home wp-singular page-template-default page page-id-688 wp-custom-logo wp-embed-responsive wp-theme-heaven wp-child-theme-theartga-child theme-heaven woocommerce-no-js veb-variation-swatches inwp-behavior-blur inwp-theme-theartga-child inwp-show-label inwp-tooltip veb-variation-gallery veb-variation-gallery-theme-heaven veb-variation-gallery-pro footer-on-bottom animate-body-popup hide-focus-outline link-style-standard content-title-style-hide content-width-normal content-style-unboxed content-vertical-padding-hide non-transparent-header mobile-non-transparent-header heaven-elementor-colors elementor-default elementor-kit-7 elementor-page elementor-page-688">
<div class="themeloader" style=""></div>
<div id="wrapper" class="site wp-site-blocks">
{{--    <a class="skip-link screen-reader-text scroll-ignore" href="#main">Skip to content</a>--}}
    @include('/site/inc/header')

<div id="inner-wrap" class="wrap kt-clear">
    <div id="primary" class="content-area">
        <div class="content-container site-container">
            <main id="main" class="site-main" role="main">
                <div class="woocommerce heaven-woo-messages-none-woo-pages woocommerce-notices-wrapper"></div>
                <div class="content-wrap">
                    @yield('content')
                </div>
            </main>
        </div>
    </div>
</div>
    @include('/site/inc/footer')
</div>
</body>
</html>

