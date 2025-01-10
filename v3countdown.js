var waitForJQuery = setInterval(function () {
		if (typeof $ != 'undefined') {


			function getTimeRemaining(endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date());
				var seconds = Math.floor((t / 1000) % 60);
				var minutes = Math.floor((t / 1000 / 60) % 60);
				var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
				var days = Math.floor(t / (1000 * 60 * 60 * 24));
				return {
					'total': t,
					'days': days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			}

			function initializeClock(id, endtime, starttime) {
				var clock = document.getElementById(id);
				var daysSpan = clock.querySelector('.days');
				var hoursSpan = clock.querySelector('.hours');
				var minutesSpan = clock.querySelector('.minutes');
				var secondsSpan = clock.querySelector('.seconds');

				var $progress = $('.progress-bar')

				function updateClock() {
					var t = getTimeRemaining(endtime);

					var p = Math.round(((new Date() - starttime) / (endtime - starttime)) * 100) + '%';
					$progress.css('width', p);

					daysSpan.innerHTML = t.days;
					hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
					minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
					secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

					if (t.total <= 0) {
						clearInterval(timeinterval);
					}
				}
				updateClock();
				var timeinterval = setInterval(updateClock, 1000);
			}
			var starttime = new Date('jan 1, 2025 0:0:0');
			var deadline = new Date('jan 2, 2025 23:59:59');
			initializeClock('clock', deadline, starttime);


			if (deadline <= new Date()) {
				document.getElementById('countdown').remove();

				var offer = document.querySelectorAll(".offer");
				for (var i = 0; i < offer.length; i++) {
					offer[i].innerHTML = '<div class="box-sm bg-dark my-md"><span class="subtitle-1 d-block">THIS OFFER HAS EXPIRED</span><span class="subtitle-2 d-block">New Offer Coming Soon</span>';
				}

				var cta = document.querySelectorAll(".offer-cta");
				for (var b = 0; b < cta.length; b++) {
					cta[b].insertAdjacentHTML('beforeend', '<a href="/contactus" class="btn btn-primary btn-block hidden-xs mb-xxs">Message For Custom Offer</a><a href="tel:(509) 204-4138" class="btn btn-primary btn-block visible-xs mb-xxs">Call For Custom Offer</a>');
				}

			}
			clearInterval(waitForJQuery);
		}
	}, 10);
