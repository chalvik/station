@extends('site.main')

@section('title', 'Главная страница')

@section('content')

    <div class="content-wrap">
        <article id="post-688" class="entry content-bg single-entry post-688 page type-page status-publish hentry">
            <div class="entry-content-wrap">

                <div class="entry-content single-content">
                    <div data-elementor-id="688" class="elementor elementor-688">

                        @include('/site/inc/slider')
                        @include('/site/inc/art')
                        @include('/site/inc/news')

                    </div>
                </div><!-- .entry-content -->
            </div>
        </article><!-- #post-688 -->

    </div>

@endsection
