var n=[],r=class{constructor(i,e){this.delay=e,this.remaining=e,this.active=!0,this.callback=i,this.resume()}resume(){!this.active||(this.start=new Date,this.clearTO(),this.timerId=setTimeout(this.callback,this.remaining))}restart(){!this.active||(this.remaining=this.delay,resume())}pause(){!this.active||(this.clearTO(),this.remaining-=new Date-this.start)}stop(){!this.active||(this.clearTO(),this.active=!1)}clearTO(){this.timerId!==void 0&&clearTimeout(this.timerId)}},o=class{constructor(i,e){this.url=i,this.delay=e,this.poll()}poll(){this.timer=new r(this.request.bind(this),this.delay)}pause(){this.timer.pause()}resume(){this.timer.resume()}request(){let i=this;$.getScript(this.url).done((e,s,a)=>{}).fail((e,s,a)=>{s&&console.log(`Failed to get session data. Server returned '${s}'`),a&&(console.log("Failed to get session data because of error."),console.log(a))}).always(()=>{i.poll()})}};function c(){let t=$("#batch_connect_sessions");if(!t)return;let i=t.data("url"),e=t.data("delay");i&&e&&n.push(new o(i,e)),$(document).on("show.bs.modal",()=>{n.forEach(s=>{s.pause()})}).on("hidden.bs.modal",()=>{n.forEach(s=>{s.resume()})})}function l(t){return t+"_value"}function u(t){var i=l(t.currentTarget.id),e=t.currentTarget.value;localStorage.setItem(i,e)}function h(t){var i=localStorage.getItem(l(t));if(i){var e='input[type="range"][name="'+t+'"]';$(e).val(i)}}function d(t){var i='input[type="range"][name="'+t+'"]';$(i).on("change",function(e){u(e)})}window.installSettingHandlers=d;window.tryUpdateSetting=h;jQuery(function(){function t(){$("body").addClass("modal-open"),$("#full-page-spinner").removeClass("d-none")}c(),$("button.relaunch").each((i,e)=>{$(e).on("click",t)})});
//# sourceMappingURL=/pun/sys/dashboard/assets/batch_connect_sessions.js-d56d4cd05b2c8623051b4663aa289c1480f7ead843e47db7e0783f4d4422daaa.map
//!
;