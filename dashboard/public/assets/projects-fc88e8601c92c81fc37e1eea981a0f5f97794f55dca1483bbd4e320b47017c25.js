var u="ood_config";function f(){return document.getElementById(u).dataset}function o(){return f().jobsInfoPath}function s(t){switch(t){case"completed":return"badge-success";case"running":return"badge-primary";case"queued":return"badge-info";case"queued_held":return"badge-warning";case"suspended":return"badge-warning";default:return"badge-warning"}}jQuery(function(){$('[data-job-poller="true"]').each((t,e)=>{c(e)})});function c(t){let e=t.dataset.jobId,r=t.dataset.jobCluster,i=`${o()}/${r}/${e}`;if(e===""||r===""){t.innerHTML="";return}fetch(i,{headers:{Accept:"application/json"},cache:"no-store"}).then(n=>{if(n.ok)return n.json();if(n.status!==404)throw new Error("Not 2xx response while looking for job",{cause:n})}).then(n=>{let a=n.state;t.innerHTML=d(e,a),a!=="completed"&&setTimeout(c,1e4,t)}).catch(n=>{})}function d(t,e){return`<div>
            <span class="mr-2">${t}</span>
            <span class="badge ${s(e)}">${e.toUpperCase()}</span>
          </div>`}
//# sourceMappingURL=/pun/sys/dashboard/assets/projects.js-c597459f935ebc66893bb7f00a372e5f9721ecf794ba071df43ea5c3081e30cb.map
//!
;
