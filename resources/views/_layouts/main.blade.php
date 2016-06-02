<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="Cache-control" content="public">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1,user-scalable=no">
        <meta name="apple-itunes-app" content="app-id={{Config::get('custom.iTunes.myAppStoreID')}}">
        <meta name="google-play-app" content="app-id={{Config::get('custom.googlePlay.app-id')}}">
        <meta name="description" content="Save on foreign exchange rates with GET4X.com. Compare the live rates from 1000+ currency exchange businesses and Book online the best deal in your city. Free - no hidden fees"/>
        <meta property="og:site_name" content="GET4X">
        <meta property="og:title" content="GET4X.com : Best Exchange Rates & Currency Booking">
        <meta property="og:description" content="Save on foreign exchange rates with GET4X.com. Compare the live rates from 1000+ currency exchange businesses and Book online the best deal in your city. Free - no hidden fees">
        <meta property="og:image" content="/images/200x200-logo.png"/>
        <meta property="og:image:width" content="200">
        <meta property="og:image:height" content="200">
        <base href="/">
        @section('meta')
        @show
        <title>@section('title')Get4x - Cash Exchange Rates@show</title>
        <!-- Favicons ==================================================-->
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
        <link rel="manifest" href="/favicon/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        @include('_partials.css')
    </head>
    <body @yield('body_attrs')>
    @include('_partials.dev')
    <section id="wrapper" class="get4xapp">
        @include('_partials.header')
        <main>
            @yield('content')
        </main>    
         @include('_partials.footer')
    </section>
    @include('_partials.js')
    </body>
</html>
