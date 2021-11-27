(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bs5 = factory());
})(this, (function () { 'use strict';

  const bs5 = {
    Toast: class {
      #body;
      #animation;
      #autohide;
      #btnClose;
      #btnCloseWhite;
      #className;
      #delay;
      #gap;
      #header;
      #margin;
      #placement;
      #pos;
      constructor(param) {
        this.#body = this.#setOption(param.body, "");
        this.#animation = this.#setOption(param.animation, true);
        this.#autohide = this.#setOption(param.autohide, true);
        this.#btnClose = this.#setOption(param.btnClose, true);
        this.#btnCloseWhite = this.#setOption(param.btnCloseWhite, false);
        this.#className = this.#setOption(param.className, "");
        this.#delay = this.#setOption(param.delay, 5e3);
        this.#gap = this.#setOption(param.gap, 16);
        this.#header = this.#setOption(param.header, "");
        this.#margin = this.#setOption(param.margin, "1rem");
        this.#placement = this.#setOption(param.placement, "top-right");
        this.#pos = this.#placement.split("-");
        const closeBtn = `<button type="button" hidden class="btn-close flex-shrink-0" data-bs-dismiss="toast" aria-label="Close"></button>`;
        let style = `style="margin:${this.#margin};${this.#pos[0]}:0;${this.#pos[1]}:${this.#animation ? "-50%" : 0};z-index:1081"`;
        let template = document.createElement("template");
        template.innerHTML = `<div class="toast position-fixed toast-${this.#placement} ${this.#className}" ${style} role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-header" hidden><div class="d-flex align-items-center flex-grow-1">${this.#header}</div>${closeBtn}</div>
				<div class="toast-body"><div class="d-flex w-100"><div class="flex-grow-1">${this.#body}</div>${closeBtn}</div></div>
			</div>`;
        let el = template.content.firstChild;
        if (el instanceof HTMLDivElement) {
          const btns = el.querySelectorAll(".btn-close");
          btns.forEach((btn) => {
            this.#btnClose && btn.removeAttribute("hidden");
            this.#btnCloseWhite && btn.classList.add("btn-close-white");
          });
          if (this.#header !== "") {
            el.querySelector(".toast-header").removeAttribute("hidden");
            btns[1].remove();
          }
          this.element = el;
        }
        document.body.insertAdjacentElement("afterbegin", this.element);
        this.bootstrapToast = new bootstrap.Toast(this.element, {
          animation: this.#animation,
          autohide: this.#autohide,
          delay: this.#delay
        });
        this.element.addEventListener("hidden.bs.toast", () => {
          this.element.remove();
          this.#stack();
        });
        this.element.addEventListener("show.bs.toast", () => {
          let that = this;
          let timer = setInterval(myFunction, 0);
          function myFunction() {
            if (that.element.offsetHeight > 0) {
              clearInterval(timer);
              if (that.#animation) {
                const transition = parseFloat(getComputedStyle(that.element).transitionDuration) * 1e3;
                that.element.style.transition = `all ${transition * 4}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${transition}ms linear`;
                that.element.style[that.#pos[1]] = 0;
              }
              that.#stack();
            }
          }
        });
      }
      #setOption(param, defaultValue) {
        return param !== void 0 ? param : defaultValue;
      }
      show() {
        this.bootstrapToast.show();
      }
      hide() {
        this.bootstrapToast.hide();
      }
      #stack() {
        const toasts = document.body.querySelectorAll(`.toast-${this.#placement}`);
        let yAxis = [];
        toasts.forEach((el, index) => {
          if (el instanceof HTMLElement) {
            index === 0 && yAxis.push(0);
            if (toasts[index + 1] instanceof HTMLElement) {
              yAxis.push(yAxis[index] + el.offsetHeight);
            }
            el.style[this.#pos[0]] = yAxis[index] + this.#gap * index + "px";
          }
        });
      }
    }
  };

  return bs5;

}));
