<?php $title = "Our Philosophy | Yarid's";
include('partials/header.php'); ?>
<section id="content">
	<div class="container">
		<div class="gutter">
			<div id="contentPrimary" class="wishlist">
				<div class="gutter">
					<!-- <div id="next"></div>
					<div id="prev"></div>
					<div id="slideCont">
						<div class="slide">
							<img src="/assets/img/w1.jpg" />
						</div>
						<div class="slide">
							<img src="/assets/img/w2.jpg" />
						</div>
						<div class="slide">
							<img src="/assets/img/w3.jpg" />
						</div>
						<div class="slide">
							<img src="/assets/img/w4.jpg" />
						</div>
						<div class="slide">
							<img src="/assets/img/w5.jpg" />
						</div>
						<div class="slide">
							<img src="/assets/img/w6.jpg" />
						</div>
					</div> -->

					<div class="banner">
					    <ul>
					        <li>
											<img src="/assets/img/w1.jpg" />
									</li>
					        <li>
											<img src="/assets/img/w2.jpg" />
									</li>
					        <li>
											<img src="/assets/img/w3.jpg" />
									</li>
					    </ul>
					</div>
				</div>
			</div>
			<nav id="contentSecondary">
				<div class="gutter">
					<?php include('partials/nav.php'); ?>
					<div id="social">
						<a href="https://www.facebook.com/pages/Yarids-Charleston/64910405871" class="facebook"></a>
						<a href="http://instagram.com/yaridsshoes/" class="instagram"></a>
					</div>
				</div>
				<div id="twitter">
					<div class="gutter">
						<?php display_user_tweets('yaridsshoes',1); ?>
						<a href="https://twitter.com/yaridsshoes" class="twitter"></a>
					</div>
				</div>
			</nav>
		</div>
	</div>
</section>

<?php include('partials/footer.php'); ?>
