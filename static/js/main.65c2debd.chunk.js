(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),r=n.n(i),l=n(2),o=n(3),s=n(5),u=n(4),m=n(1),h=n.n(m),b=(h.a.shape({isVisible:h.a.bool.isRequired}).isRequired,function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={time:new Date},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=new Date;console.log(t.toLocaleTimeString()),e.setState({time:t})}),1e3)}},{key:"render",value:function(){return this.props.isVisible?c.a.createElement("span",null,this.state.time.toLocaleTimeString()):c.a.createElement("span",null,"Empty")}}]),n}(c.a.Component)),p=(h.a.shape({click:h.a.func.isRequired}).isRequired,function(e){var t=e.click;return c.a.createElement("button",{type:"button",onClick:t},"Toggle clock")}),k=(h.a.shape({click:h.a.func.isRequired}).isRequired,function(e){var t=e.click;return c.a.createElement("button",{type:"button",onClick:t},"Set name")}),f=(n(15),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).changeVisibility=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e.changeName=function(){var t=Math.floor(1e3*Math.random());console.log("The Clock was renamed from ".concat(e.state.name," to ").concat(t)),e.setState({name:t})},e.state={isClockVisible:!0,name:1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.isClockVisible;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement("p",null,"Current time:"," ",c.a.createElement(b,{isVisible:e})),c.a.createElement(p,{click:this.changeVisibility}),c.a.createElement(k,{click:this.changeName}))}}]),n}(c.a.Component));r.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.65c2debd.chunk.js.map