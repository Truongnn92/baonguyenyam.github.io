@extends('_layouts.main')
@section('body_attrs') class="get4x-home" @stop
@section('content')


<!-- Sliders -->
<section class="home-sliders">
	<div class="boxcontent">
		<article class="boxitem">
			<aside>
				<h1>Get4x</h1>
				<h2>Money Changer exchange rates made transparent</h2>
			</aside>
			<div class="boxsearch">
				<h3>Compare cash exchange rates in</h3>
				<div class="row">
					<div class="col-xs-12">
						<div class="input-group">
							<input type="text" class="form-control input-white" placeholder="Enter your location">
							<span class="input-group-btn">
							<button class="btn btn-main" type="button">Go</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
	<div class="owl-carousel owl-theme">
		<div class="item" bg-img-responsive="/img/slider-01.png" bg-img-responsive-sm="/img/sm-slider-01.png"></div>
		<div class="item" bg-img-responsive="/img/slider-02.png" bg-img-responsive-sm="/img/sm-slider-02.png"></div>
		<div class="item" bg-img-responsive="/img/slider-03.png" bg-img-responsive-sm="/img/sm-slider-03.png"></div>
		<div class="item" bg-img-responsive="/img/slider-04.png" bg-img-responsive-sm="/img/sm-slider-04.png"></div>
	</div>
</section>

<!-- Maps -->
<section class="home-maps">
	<figure>
		<img src="/img/map-bg.png" img-src-responsive="/img/map-bg.png" img-src-responsive-sm="/img/sm-map-bg.png" alt="">
		<figcaption>
			<div class="areas">
				<div class="item mumbai">
					<div class="pulsating-circle"></div>
					<div class="summary">
						<div class="name">Mumbai</div>
						<div class="sum">987 Money Changes</div>
					</div>
				</div>
				<div class="item hongkong">
					<div class="pulsating-circle"></div>
					<div class="summary">
						<div class="name">Hong Kong</div>
						<div class="sum">987 Money Changes</div>
					</div>
				</div>
				<div class="item thailand">
					<div class="pulsating-circle"></div>
					<div class="summary">
						<div class="name">Thailand</div>
						<div class="sum">987 Money Changes</div>
					</div>
				</div>
				<div class="item singapore">
					<div class="pulsating-circle"></div>
					<div class="summary">
						<div class="name">Singapore</div>
						<div class="sum">987 Money Changes</div>
					</div>
				</div>
			</div>
		</figcaption>
	</figure>
	<div class="status">Now Avaliable in 7 cities covering 100+ currencies.</div>
</section>

<!-- How it works -->
<section class="home-howitworks">

	<div class="title">
		<h2>How it works</h2>
	</div>


	<!-- Nav tabs -->
	<ul class="nav nav-pills" role="tablist">
		<li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#hiwapp" role="tab"><i class="mdi mdi-cellphone"></i> Apps</a>
		</li>
		<li class="nav-item">
			<a class="nav-link active" data-toggle="tab" href="#hiwpc" role="tab"><i class="mdi mdi-laptop-windows"></i> Desktop</a>
		</li>
	</ul>

	<!-- Tab panes -->
	<div class="tab-content">
		<div class="tab-pane" id="hiwapp" role="tabpanel">

			<div class="boxhiw clearfix">
				<div class="boxright">
					<div class="content hidden-md-down">
						<p class="titlec">
							<a href="javascript:void(0);" slider="1" class="goowl active">
								<i class="mdi mdi-numeric-1-box"></i>
								Step 1
							</a>
						</p>
						<p slider="1" class="goowl active">Choose the city in which you would like to research currency rates, from the drop down menu at the top of the site beside the get4x logo.</p>
						<p slider="1" class="goowl active">Select the currency that you have and enter the amount and type of currency you would like to search rates for.</p>
						<p class="titlec">
							<a href="javascript:void(0);" slider="2" class="goowl">
								<i class="mdi mdi-numeric-2-box"></i>
								Step 2
							</a>
						</p>
						<p slider="2" class="goowl">Refer to the map to view the money changer rates and location. You can also sort through your choices by the top 5 money changers that offer the best rates for the currency you wish to exchange.</p>
						<p slider="2" class="goowl">Click on the rate that you want. Log in to view the contact details of the money changer, and contact them to secure the rate and availability of currency.</p>
						<p class="titlec">
							<a href="javascript:void(0);" slider="3" class="goowl">
								<i class="mdi mdi-numeric-3-box"></i>
								Step 3
							</a>
						</p>
						<p slider="3" class="goowl">Proceed to the money changer outlet to exchange your currency.</p>
					</div>
				</div>
				<div class="boxleft">
					<div class="owl-carousel owl-theme">
						<div class="item">
							<img src="/img/iPhone.png" alt="" class="">
							<div class="hidden-lg-up">
								<div class="infotop"><h4><i class="mdi mdi-numeric-1-box"></i> Step 1</h4></div>
								<div class="info">
									<p>Indicate the currency that you have at the top of the screen, and enter the amount and currency that you are searching for.</p>
									<p>Indicate your preferred city, by clicking on “Around Current location”. get4x is available in Bangkok, Hong Kong, Mumbai and Singapore.</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img src="/img/iPhone.png" alt="" class="shadow">
							<div class="hidden-lg-up">
								<div class="infotop"><h4><i class="mdi mdi-numeric-2-box"></i> Step 2</h4></div>
								<div class="info">
									<p>Indicate the currency that you have at the top of the screen, and enter the amount and currency that you are searching for.</p>
									<p>Indicate your preferred city, by clicking on “Around Current location”. get4x is available in Bangkok, Hong Kong, Mumbai and Singapore.</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img src="/img/iPhone.png" alt="" class="shadow">
							<div class="hidden-lg-up">
								<div class="infotop"><h4><i class="mdi mdi-numeric-3-box"></i> Step 3</h4></div>
								<div class="info">
									<p>Indicate the currency that you have at the top of the screen, and enter the amount and currency that you are searching for.</p>
									<p>Indicate your preferred city, by clicking on “Around Current location”. get4x is available in Bangkok, Hong Kong, Mumbai and Singapore.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="tab-pane active" id="hiwpc" role="tabpanel">

			<div class="boxhiw clearfix">
				<div class="boxright">
					<div class="content hidden-md-down">
						<p class="titlec">
							<a href="javascript:void(0);" slider="1" class="goowl active">
								<i class="mdi mdi-numeric-1-box"></i>
								Step 1
							</a>
						</p>
						<p slider="1" class="goowl active">Choose the city in which you would like to research currency rates, from the drop down menu at the top of the site beside the get4x logo.</p>
						<p slider="1" class="goowl active">Select the currency that you have and enter the amount and type of currency you would like to search rates for.</p>
						<p class="titlec">
							<a href="javascript:void(0);" slider="2" class="goowl">
								<i class="mdi mdi-numeric-2-box"></i>
								Step 2
							</a>
						</p>
						<p slider="2" class="goowl">Refer to the map to view the money changer rates and location. You can also sort through your choices by the top 5 money changers that offer the best rates for the currency you wish to exchange.</p>
						<p slider="2" class="goowl">Click on the rate that you want. Log in to view the contact details of the money changer, and contact them to secure the rate and availability of currency.</p>
						<p class="titlec">
							<a href="javascript:void(0);" slider="3" class="goowl">
								<i class="mdi mdi-numeric-3-box"></i>
								Step 3
							</a>
						</p>
						<p slider="3" class="goowl">Proceed to the money changer outlet to exchange your currency.</p>
					</div>
				</div>
				<div class="boxleft">
					<div class="owl-carousel owl-theme">
						<div class="item">
							<img src="/img/MacBookPro.png" alt="" class="">
							<div class="hidden-lg-up">
								<div class="infotop"><h4><i class="mdi mdi-numeric-1-box"></i> Step 1</h4></div>
								<div class="info">
									<p>Indicate the currency that you have at the top of the screen, and enter the amount and currency that you are searching for.</p>
									<p>Indicate your preferred city, by clicking on “Around Current location”. get4x is available in Bangkok, Hong Kong, Mumbai and Singapore.</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img src="/img/MacBookPro.png" alt="" class="shadow">
							<div class="hidden-lg-up">
								<div class="infotop"><h4><i class="mdi mdi-numeric-2-box"></i> Step 2</h4></div>
								<div class="info">
									<p>Indicate the currency that you have at the top of the screen, and enter the amount and currency that you are searching for.</p>
									<p>Indicate your preferred city, by clicking on “Around Current location”. get4x is available in Bangkok, Hong Kong, Mumbai and Singapore.</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img src="/img/MacBookPro.png" alt="" class="shadow">
							<div class="hidden-lg-up">
								<div class="infotop"><h4><i class="mdi mdi-numeric-3-box"></i> Step 3</h4></div>
								<div class="info">
									<p>Indicate the currency that you have at the top of the screen, and enter the amount and currency that you are searching for.</p>
									<p>Indicate your preferred city, by clicking on “Around Current location”. get4x is available in Bangkok, Hong Kong, Mumbai and Singapore.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="home-testimonials">
	<h2>Testimonials</h2>
	<div class="desc">
		<h3>Get4x. A Must-Have For Global Travellers.</h3>
		<p>Just as any traveler requires foreign currency, any smart saver wishing to strech their local dollar further needs Get4x. Discovered a rate you like? Contact licensed money changers through your mobile and lock in a favourable exchange rate.</p>
		
		<div class="testimonials">
			<div class="owl-carousel owl-theme">
				<div class="item">
					<div class="quote">Best rates across asia! I'm using this app for work as I travel across asia. Finally I'm not wasting money anymore!</div>
					<div class="info">
						<figure>
							<img src="/img/1.jpg" alt="">
							<figcaption>
								<div class="name">
									Jay Sinclair
								</div>
								<div class="jobs">CEO ABC Company</div>
							</figcaption>
						</figure>
					</div>
				</div>
				<div class="item">
					<div class="quote">Best rates across asia! I'm using this app for work as I travel across asia. Finally I'm not wasting money anymore!</div>
					<div class="info">
						<figure>
							<img src="/img/3.jpg" alt="">
							<figcaption>
								<div class="name">
									Jay Sinclair
								</div>
								<div class="jobs">CEO ABC Company</div>
							</figcaption>
						</figure>
					</div>
				</div>
				<div class="item">
					<div class="quote">Best rates across asia! I'm using this app for work as I travel across asia. Finally I'm not wasting money anymore!</div>
					<div class="info">
						<figure>
							<img src="/img/4.png" alt="">
							<figcaption>
								<div class="name">
									Jay Sinclair
								</div>
								<div class="jobs">CEO ABC Company</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>

	</div>

</section>

@stop