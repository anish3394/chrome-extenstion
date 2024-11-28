// contentScript.js

// alert("contentScript.js is running!");

// Function to find the target div
const findTargetDiv = (intervalId) => {
    const targets = document.querySelectorAll('td[class="gU aYL"]');

    // Check if the target div is found and alert accordingly
    // if (target) {
        // alert("Target div found - :ns");
        targets.forEach(target => {
        // Check if the content is already added to avoid duplication ::svg is from:https://danmarshall.github.io/google-font-to-svg-path/
        if (!target.querySelector('.wisestamp-icon-container') || !target.querySelector('div.morelly'))            {
            target.insertAdjacentHTML("beforeend", `
                <div id=":rj2" class="J-JN-M-I J-J5-Ji Xv L3 T-I-ax7 T-I wisestamp-icon-container" jslog="147027; u014N:cOuCgd,Kr2w4b,xr6bB;" role="button" tabindex="1" aria-haspopup="true" aria-expanded="false" aria-label="More options" style="user-select: none; padding-left: 10px" data-v-app="">
                    <div role="button" tabindex="0" class="signatures-panel-button ws-active" data-v-83acab="">
                    <div class="morelly">
                       <svg width="29.067" height="9.56" viewBox="0 0 29.067 9.56" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><path d="M 0.238 6.892 A 0.51 0.51 0 0 0 0.33 6.9 A 0.887 0.887 0 0 0 0.419 6.895 Q 0.539 6.883 0.69 6.84 A 1.125 1.125 0 0 0 0.742 6.824 A 0.962 0.962 0 0 0 1.055 6.65 Q 1.21 6.52 1.21 6.32 A 4.87 4.87 0 0 0 1.205 6.095 A 6.007 6.007 0 0 0 1.175 5.72 A 4.873 4.873 0 0 1 1.163 5.591 Q 1.151 5.444 1.145 5.277 A 9.115 9.115 0 0 1 1.14 4.97 Q 1.14 4.46 1.205 3.935 A 11.153 11.153 0 0 1 1.222 3.804 A 10.152 10.152 0 0 1 1.38 2.925 Q 1.442 2.652 1.507 2.419 A 7.13 7.13 0 0 1 1.61 2.08 A 1.024 1.024 0 0 1 1.678 1.937 Q 1.719 1.866 1.766 1.819 A 0.308 0.308 0 0 1 1.99 1.72 A 0.192 0.192 0 0 1 2.115 1.761 Q 2.188 1.821 2.215 1.964 A 0.944 0.944 0 0 1 2.23 2.09 A 24.127 24.127 0 0 0 2.23 2.097 Q 2.28 2.963 2.39 3.655 Q 2.462 4.111 2.543 4.453 A 5.527 5.527 0 0 0 2.63 4.78 Q 2.73 5.1 2.945 5.365 A 0.688 0.688 0 0 0 3.326 5.602 A 1.059 1.059 0 0 0 3.58 5.63 A 1.018 1.018 0 0 0 3.819 5.601 A 1.203 1.203 0 0 0 4.115 5.485 A 0.878 0.878 0 0 0 4.306 5.34 Q 4.465 5.185 4.61 4.92 A 5.474 5.474 0 0 0 4.792 4.561 A 7.157 7.157 0 0 0 4.985 4.1 Q 5.16 3.64 5.32 3.16 Q 5.48 2.68 5.61 2.26 A 1.556 1.556 0 0 1 5.64 2.162 Q 5.692 2.011 5.765 1.915 A 0.402 0.402 0 0 1 5.793 1.882 A 0.275 0.275 0 0 1 6 1.79 A 0.32 0.32 0 0 1 6.036 1.792 Q 6.125 1.802 6.15 1.865 Q 6.18 1.94 6.18 2.1 A 3.163 3.163 0 0 1 6.18 2.111 Q 6.179 2.327 6.149 2.712 A 22.909 22.909 0 0 1 6.125 2.995 A 12.933 12.933 0 0 0 6.084 3.629 A 16.686 16.686 0 0 0 6.07 4.32 Q 6.07 4.77 6.11 5.25 Q 6.15 5.73 6.25 6.15 A 2.351 2.351 0 0 0 6.293 6.295 Q 6.331 6.409 6.378 6.504 A 1.152 1.152 0 0 0 6.49 6.69 A 0.48 0.48 0 0 0 6.772 6.871 A 0.762 0.762 0 0 0 6.95 6.89 Q 7.29 6.89 7.555 6.685 Q 7.663 6.602 7.727 6.511 A 0.48 0.48 0 0 0 7.82 6.23 Q 7.82 6.12 7.755 6.03 Q 7.69 5.94 7.61 5.87 Q 7.34 5.57 7.205 5.13 Q 7.07 4.69 7.025 4.19 A 11.881 11.881 0 0 1 7.001 3.882 A 10.087 10.087 0 0 1 6.98 3.24 Q 6.98 2.95 6.995 2.675 Q 7.01 2.4 7.02 2.14 Q 7.05 1.69 7.05 1.28 A 3.34 3.34 0 0 0 7.048 1.177 Q 7.04 0.89 6.98 0.697 A 0.793 0.793 0 0 0 6.895 0.505 Q 6.74 0.26 6.38 0.26 A 1.157 1.157 0 0 0 6.332 0.261 A 0.881 0.881 0 0 0 5.73 0.515 A 1.767 1.767 0 0 0 5.514 0.773 A 2.181 2.181 0 0 0 5.305 1.155 Q 5.14 1.54 5.01 1.92 A 29.052 29.052 0 0 1 4.891 2.289 A 39.311 39.311 0 0 1 4.755 2.695 A 20.231 20.231 0 0 1 4.682 2.905 A 17.572 17.572 0 0 1 4.46 3.5 A 8.208 8.208 0 0 1 4.453 3.517 Q 4.354 3.767 4.263 3.947 A 2.64 2.64 0 0 1 4.18 4.1 A 0.797 0.797 0 0 1 4.131 4.174 Q 4.09 4.23 4.044 4.267 A 0.301 0.301 0 0 1 3.85 4.34 A 0.219 0.219 0 0 1 3.702 4.285 Q 3.667 4.254 3.637 4.205 A 0.591 0.591 0 0 1 3.59 4.11 A 1.826 1.826 0 0 1 3.569 4.057 Q 3.47 3.803 3.38 3.365 Q 3.28 2.88 3.2 2.29 Q 3.12 1.7 3.06 1.12 A 2.194 2.194 0 0 0 3.056 1.081 Q 3.011 0.632 2.8 0.455 Q 2.58 0.27 2.3 0.27 Q 1.92 0.27 1.635 0.545 Q 1.35 0.82 1.13 1.34 Q 1.018 1.618 0.88 2.013 A 26.979 26.979 0 0 0 0.785 2.29 A 12.956 12.956 0 0 0 0.644 2.738 A 15.484 15.484 0 0 0 0.43 3.54 Q 0.25 4.33 0.125 5.13 A 13.008 13.008 0 0 0 0.092 5.351 Q 0 6.017 0 6.55 Q 0 6.68 0.07 6.79 A 0.208 0.208 0 0 0 0.15 6.863 Q 0.188 6.883 0.238 6.892 Z M 24.87 9.508 A 1.28 1.28 0 0 0 25.24 9.56 A 1.621 1.621 0 0 0 25.587 9.523 A 1.772 1.772 0 0 0 26.14 9.295 Q 26.57 9.03 26.92 8.6 A 6.44 6.44 0 0 0 27.27 8.14 A 8.193 8.193 0 0 0 27.695 7.455 Q 28.06 6.8 28.345 6.1 A 14.258 14.258 0 0 0 28.544 5.583 A 11.764 11.764 0 0 0 28.81 4.76 Q 28.99 4.12 29.05 3.65 Q 29.1 3.31 29 3.025 A 0.566 0.566 0 0 0 28.97 2.954 Q 28.86 2.74 28.6 2.74 Q 28.488 2.74 28.353 2.783 A 1.448 1.448 0 0 0 28.205 2.84 A 1.576 1.576 0 0 0 28.084 2.9 A 1.304 1.304 0 0 0 27.82 3.09 Q 27.758 3.149 27.719 3.21 A 0.375 0.375 0 0 0 27.66 3.41 Q 27.66 3.51 27.72 3.585 Q 27.765 3.641 27.833 3.723 A 21.888 21.888 0 0 0 27.88 3.78 Q 28 3.9 28.05 4.06 A 1.052 1.052 0 0 1 28.087 4.224 A 1.375 1.375 0 0 1 28.1 4.42 A 1.294 1.294 0 0 1 28.09 4.582 A 1.344 1.344 0 0 1 27.915 5.09 Q 27.73 5.41 27.44 5.61 A 1.291 1.291 0 0 1 27.349 5.668 A 1.029 1.029 0 0 1 26.83 5.81 A 0.383 0.383 0 0 1 26.736 5.799 Q 26.634 5.774 26.598 5.684 A 0.291 0.291 0 0 1 26.58 5.59 A 8.75 8.75 0 0 0 26.567 5.413 A 10.159 10.159 0 0 0 26.515 4.94 A 13.843 13.843 0 0 0 26.48 4.691 A 11.343 11.343 0 0 0 26.415 4.305 A 10.942 10.942 0 0 0 26.413 4.292 Q 26.359 4.006 26.31 3.83 A 4.946 4.946 0 0 0 26.284 3.742 Q 26.162 3.349 26 3.065 A 0.587 0.587 0 0 0 25.644 2.781 A 0.835 0.835 0 0 0 25.41 2.75 A 0.936 0.936 0 0 0 25.283 2.758 A 0.66 0.66 0 0 0 24.87 2.97 Q 24.67 3.19 24.67 3.55 A 0.872 0.872 0 0 0 24.671 3.581 Q 24.673 3.65 24.687 3.696 A 0.2 0.2 0 0 0 24.705 3.74 Q 24.731 3.785 24.806 3.802 A 0.396 0.396 0 0 0 24.86 3.81 Q 25.03 3.83 25.12 3.89 A 0.394 0.394 0 0 1 25.14 3.904 Q 25.182 3.936 25.22 3.982 A 0.679 0.679 0 0 1 25.28 4.07 Q 25.46 4.33 25.585 4.705 Q 25.71 5.08 25.795 5.48 Q 25.88 5.88 25.91 6.21 A 1.963 1.963 0 0 0 25.917 6.262 Q 25.95 6.491 26.029 6.636 A 0.503 0.503 0 0 0 26.16 6.795 A 0.841 0.841 0 0 0 26.299 6.883 A 0.601 0.601 0 0 0 26.57 6.95 A 0.77 0.77 0 0 0 26.762 6.925 A 1.056 1.056 0 0 0 26.93 6.865 Q 27.049 6.812 27.179 6.718 A 2.358 2.358 0 0 0 27.34 6.59 Q 27.1 7.04 26.86 7.395 Q 26.62 7.75 26.45 7.94 Q 26.26 8.16 26.035 8.33 A 0.959 0.959 0 0 1 25.899 8.416 A 0.706 0.706 0 0 1 25.57 8.5 Q 25.498 8.5 25.438 8.485 A 0.353 0.353 0 0 1 25.285 8.405 A 0.951 0.951 0 0 1 25.24 8.362 A 1.052 1.052 0 0 1 25.1 8.18 Q 25.07 8.13 25.02 8.09 Q 24.97 8.05 24.85 8.05 Q 24.59 8.05 24.415 8.255 A 0.712 0.712 0 0 0 24.285 8.477 A 0.799 0.799 0 0 0 24.24 8.75 A 0.91 0.91 0 0 0 24.24 8.774 Q 24.25 9.127 24.535 9.34 A 1.072 1.072 0 0 0 24.87 9.508 Z M 17.307 6.879 A 2.137 2.137 0 0 0 17.79 6.93 Q 18.71 6.93 19.38 6.29 A 3.283 3.283 0 0 0 19.386 6.285 Q 19.651 6.032 19.728 5.849 A 0.36 0.36 0 0 0 19.76 5.71 A 0.293 0.293 0 0 0 19.759 5.692 A 0.22 0.22 0 0 0 19.695 5.545 A 0.214 0.214 0 0 0 19.612 5.493 A 0.252 0.252 0 0 0 19.53 5.48 Q 19.446 5.48 19.351 5.539 A 0.694 0.694 0 0 0 19.27 5.6 A 1.52 1.52 0 0 1 19.073 5.736 A 1.833 1.833 0 0 1 18.745 5.885 A 2.088 2.088 0 0 1 18.593 5.931 A 1.749 1.749 0 0 1 18.15 5.99 Q 17.67 5.99 17.365 5.71 A 0.933 0.933 0 0 1 17.109 5.32 A 1.152 1.152 0 0 1 17.05 4.97 A 1.269 1.269 0 0 0 17.157 5.038 Q 17.508 5.238 18.021 5.24 A 2.668 2.668 0 0 0 18.03 5.24 A 2.343 2.343 0 0 0 18.211 5.233 A 1.945 1.945 0 0 0 18.92 5.045 Q 19.32 4.85 19.56 4.52 Q 19.8 4.19 19.8 3.8 A 1.263 1.263 0 0 0 19.797 3.71 A 0.949 0.949 0 0 0 19.44 3.015 Q 19.209 2.826 18.88 2.758 A 1.981 1.981 0 0 0 18.48 2.72 Q 17.85 2.72 17.325 3.065 Q 16.8 3.41 16.49 3.99 A 2.556 2.556 0 0 0 16.314 4.404 A 2.812 2.812 0 0 0 16.18 5.28 A 2.768 2.768 0 0 0 16.181 5.359 Q 16.202 6.076 16.598 6.488 A 1.361 1.361 0 0 0 16.605 6.495 A 1.343 1.343 0 0 0 16.678 6.564 Q 16.937 6.793 17.307 6.879 Z M 21.067 6.885 A 0.833 0.833 0 0 0 21.23 6.9 Q 21.416 6.9 21.559 6.858 A 0.679 0.679 0 0 0 21.765 6.76 A 1.226 1.226 0 0 0 21.788 6.743 Q 21.866 6.685 21.924 6.621 A 0.69 0.69 0 0 0 22.04 6.45 Q 22.099 6.325 22.114 6.249 A 0.247 0.247 0 0 0 22.12 6.2 A 0.246 0.246 0 0 0 22.119 6.177 Q 22.114 6.124 22.085 6.095 A 0.234 0.234 0 0 0 22.083 6.093 Q 22.048 6.059 21.98 6.02 A 1.948 1.948 0 0 1 21.839 5.931 Q 21.686 5.824 21.605 5.715 A 0.398 0.398 0 0 1 21.574 5.666 Q 21.516 5.558 21.498 5.382 A 1.696 1.696 0 0 1 21.49 5.21 A 2.546 2.546 0 0 1 21.49 5.196 Q 21.491 4.992 21.525 4.74 Q 21.56 4.48 21.6 4.19 A 30.151 30.151 0 0 0 21.617 4.064 Q 21.669 3.668 21.725 3.17 Q 21.79 2.59 21.79 1.8 A 13.224 13.224 0 0 0 21.79 1.731 Q 21.787 1.253 21.75 0.875 A 2.645 2.645 0 0 0 21.721 0.666 Q 21.699 0.54 21.665 0.435 A 1.127 1.127 0 0 0 21.58 0.235 A 0.58 0.58 0 0 0 21.548 0.184 Q 21.477 0.082 21.375 0.037 A 0.451 0.451 0 0 0 21.19 0 A 0.654 0.654 0 0 0 21.017 0.024 A 0.857 0.857 0 0 0 20.86 0.085 Q 20.69 0.17 20.575 0.29 Q 20.529 0.338 20.502 0.387 A 0.31 0.31 0 0 0 20.46 0.54 A 0.187 0.187 0 0 0 20.46 0.543 Q 20.461 0.611 20.512 0.74 A 2.054 2.054 0 0 0 20.55 0.83 A 2.692 2.692 0 0 1 20.754 1.37 A 3.539 3.539 0 0 1 20.855 1.975 A 16.633 16.633 0 0 1 20.871 2.179 A 14.865 14.865 0 0 1 20.91 3.24 A 8.51 8.51 0 0 1 20.907 3.458 A 9.792 9.792 0 0 1 20.865 4.14 A 23.067 23.067 0 0 1 20.842 4.373 A 20.358 20.358 0 0 1 20.76 5.04 Q 20.72 5.39 20.69 5.69 A 7.95 7.95 0 0 0 20.674 5.875 Q 20.667 5.962 20.664 6.036 A 3.196 3.196 0 0 0 20.66 6.18 A 2.049 2.049 0 0 0 20.662 6.273 Q 20.677 6.599 20.8 6.74 Q 20.897 6.851 21.067 6.885 Z M 23.347 6.885 A 0.833 0.833 0 0 0 23.51 6.9 Q 23.696 6.9 23.839 6.858 A 0.679 0.679 0 0 0 24.045 6.76 A 1.226 1.226 0 0 0 24.068 6.743 Q 24.146 6.685 24.204 6.621 A 0.69 0.69 0 0 0 24.32 6.45 Q 24.379 6.325 24.394 6.249 A 0.247 0.247 0 0 0 24.4 6.2 A 0.246 0.246 0 0 0 24.399 6.177 Q 24.394 6.124 24.365 6.095 A 0.234 0.234 0 0 0 24.363 6.093 Q 24.328 6.059 24.26 6.02 A 1.948 1.948 0 0 1 24.119 5.931 Q 23.966 5.824 23.885 5.715 A 0.398 0.398 0 0 1 23.854 5.666 Q 23.796 5.558 23.778 5.382 A 1.696 1.696 0 0 1 23.77 5.21 A 2.546 2.546 0 0 1 23.77 5.196 Q 23.771 4.992 23.805 4.74 Q 23.84 4.48 23.88 4.19 A 30.151 30.151 0 0 0 23.897 4.064 Q 23.949 3.668 24.005 3.17 Q 24.07 2.59 24.07 1.8 A 13.224 13.224 0 0 0 24.07 1.731 Q 24.067 1.253 24.03 0.875 A 2.645 2.645 0 0 0 24.001 0.666 Q 23.979 0.54 23.945 0.435 A 1.127 1.127 0 0 0 23.86 0.235 A 0.58 0.58 0 0 0 23.828 0.184 Q 23.757 0.082 23.655 0.037 A 0.451 0.451 0 0 0 23.47 0 A 0.654 0.654 0 0 0 23.297 0.024 A 0.857 0.857 0 0 0 23.14 0.085 Q 22.97 0.17 22.855 0.29 Q 22.809 0.338 22.782 0.387 A 0.31 0.31 0 0 0 22.74 0.54 A 0.187 0.187 0 0 0 22.74 0.543 Q 22.741 0.611 22.792 0.74 A 2.054 2.054 0 0 0 22.83 0.83 A 2.692 2.692 0 0 1 23.034 1.37 A 3.539 3.539 0 0 1 23.135 1.975 A 16.633 16.633 0 0 1 23.151 2.179 A 14.865 14.865 0 0 1 23.19 3.24 A 8.51 8.51 0 0 1 23.187 3.458 A 9.792 9.792 0 0 1 23.145 4.14 A 23.067 23.067 0 0 1 23.122 4.373 A 20.358 20.358 0 0 1 23.04 5.04 Q 23 5.39 22.97 5.69 A 7.95 7.95 0 0 0 22.954 5.875 Q 22.947 5.962 22.944 6.036 A 3.196 3.196 0 0 0 22.94 6.18 A 2.049 2.049 0 0 0 22.942 6.273 Q 22.957 6.599 23.08 6.74 Q 23.177 6.851 23.347 6.885 Z M 13.52 6.904 A 0.757 0.757 0 0 0 13.62 6.91 A 0.947 0.947 0 0 0 13.705 6.906 A 0.673 0.673 0 0 0 14.175 6.67 A 0.824 0.824 0 0 0 14.346 6.339 A 1.097 1.097 0 0 0 14.38 6.06 A 6.308 6.308 0 0 0 14.38 6.051 Q 14.38 5.962 14.377 5.801 A 47.525 47.525 0 0 0 14.375 5.68 Q 14.37 5.42 14.36 5.17 A 3.59 3.59 0 0 1 14.387 4.814 Q 14.414 4.613 14.463 4.446 A 1.499 1.499 0 0 1 14.6 4.12 Q 14.705 3.939 14.826 3.844 A 0.452 0.452 0 0 1 15.11 3.74 A 0.382 0.382 0 0 1 15.319 3.799 A 0.464 0.464 0 0 1 15.43 3.9 A 0.161 0.161 0 0 0 15.452 3.924 A 0.113 0.113 0 0 0 15.5 3.95 Q 15.54 3.96 15.57 3.96 A 0.276 0.276 0 0 0 15.584 3.96 Q 15.71 3.953 15.834 3.831 A 0.928 0.928 0 0 0 15.925 3.725 A 1.021 1.021 0 0 0 15.961 3.673 A 0.815 0.815 0 0 0 16.1 3.22 A 0.638 0.638 0 0 0 16.084 3.073 A 0.387 0.387 0 0 0 15.92 2.83 A 0.627 0.627 0 0 0 15.903 2.819 Q 15.801 2.756 15.671 2.729 A 1.004 1.004 0 0 0 15.47 2.71 A 1.241 1.241 0 0 0 15.322 2.719 A 0.925 0.925 0 0 0 14.805 2.945 A 1.4 1.4 0 0 0 14.793 2.955 Q 14.651 3.084 14.534 3.262 A 2.239 2.239 0 0 0 14.36 3.58 A 1.915 1.915 0 0 0 14.355 3.439 Q 14.334 3.155 14.225 2.965 A 0.442 0.442 0 0 0 14.129 2.848 Q 14.046 2.777 13.925 2.749 A 0.768 0.768 0 0 0 13.75 2.73 A 1.022 1.022 0 0 0 13.662 2.734 A 0.825 0.825 0 0 0 13.29 2.855 A 1.161 1.161 0 0 0 13.163 2.946 A 0.903 0.903 0 0 0 12.98 3.15 A 0.943 0.943 0 0 0 12.938 3.221 Q 12.908 3.279 12.891 3.333 A 0.427 0.427 0 0 0 12.87 3.46 A 0.244 0.244 0 0 0 12.875 3.51 A 0.163 0.163 0 0 0 12.925 3.6 Q 12.98 3.65 13.05 3.68 Q 13.21 3.73 13.32 3.825 Q 13.399 3.893 13.455 4.039 A 1.248 1.248 0 0 1 13.495 4.165 Q 13.544 4.349 13.556 4.693 A 7.009 7.009 0 0 1 13.56 4.94 A 4.651 4.651 0 0 1 13.554 5.173 A 5.36 5.36 0 0 1 13.485 5.795 Q 13.41 6.24 13.3 6.67 A 0.299 0.299 0 0 0 13.295 6.698 Q 13.286 6.768 13.318 6.813 A 0.148 0.148 0 0 0 13.365 6.855 A 0.343 0.343 0 0 0 13.427 6.883 Q 13.469 6.897 13.52 6.904 Z M 9.57 6.879 A 2.061 2.061 0 0 0 10.04 6.93 A 2.518 2.518 0 0 0 10.321 6.915 A 1.996 1.996 0 0 0 11.195 6.61 Q 11.69 6.29 11.97 5.745 Q 12.25 5.2 12.25 4.53 A 3.016 3.016 0 0 0 12.249 4.447 Q 12.241 4.159 12.178 3.916 A 1.575 1.575 0 0 0 11.775 3.19 A 1.468 1.468 0 0 0 11.608 3.045 Q 11.158 2.71 10.44 2.71 A 3.624 3.624 0 0 0 10.385 2.71 Q 10.118 2.715 9.885 2.758 A 2.108 2.108 0 0 0 9.36 2.925 A 6.465 6.465 0 0 0 9.275 2.966 Q 9.022 3.092 8.854 3.205 A 1.644 1.644 0 0 0 8.7 3.32 A 0.625 0.625 0 0 0 8.653 3.36 Q 8.619 3.393 8.584 3.435 A 1.351 1.351 0 0 0 8.515 3.525 A 0.444 0.444 0 0 0 8.471 3.604 Q 8.42 3.722 8.42 3.89 A 0.768 0.768 0 0 0 8.424 3.968 A 0.87 0.87 0 0 0 8.465 4.155 A 0.275 0.275 0 0 0 8.491 4.212 Q 8.539 4.29 8.63 4.29 A 0.13 0.13 0 0 0 8.631 4.29 Q 8.692 4.289 8.799 4.231 A 1.329 1.329 0 0 0 8.87 4.19 Q 8.71 4.47 8.615 4.79 Q 8.52 5.11 8.52 5.45 A 2.43 2.43 0 0 0 8.522 5.559 Q 8.533 5.791 8.588 5.985 A 1.195 1.195 0 0 0 8.935 6.555 A 1.407 1.407 0 0 0 9.57 6.879 Z M 10.35 5.91 A 1.314 1.314 0 0 0 10.805 5.834 A 1.172 1.172 0 0 0 11.195 5.595 A 1.043 1.043 0 0 0 11.533 4.902 A 1.446 1.446 0 0 0 11.54 4.76 Q 11.54 4.22 11.19 3.99 A 1.404 1.404 0 0 0 10.521 3.766 A 1.744 1.744 0 0 0 10.38 3.76 Q 10.17 3.76 10 3.8 A 2.295 2.295 0 0 0 9.737 3.878 A 2.048 2.048 0 0 0 9.68 3.9 A 2.492 2.492 0 0 0 9.502 4.199 A 2.961 2.961 0 0 0 9.43 4.35 A 1.313 1.313 0 0 0 9.324 4.789 A 1.564 1.564 0 0 0 9.32 4.9 Q 9.32 5.308 9.519 5.552 A 0.786 0.786 0 0 0 9.62 5.655 A 1.067 1.067 0 0 0 10.254 5.907 A 1.38 1.38 0 0 0 10.35 5.91 Z M 18.488 4.46 A 0.852 0.852 0 0 0 18.54 4.43 Q 18.78 4.28 18.78 4.05 Q 18.78 3.86 18.62 3.755 Q 18.498 3.675 18.305 3.656 A 1.283 1.283 0 0 0 18.18 3.65 A 1.182 1.182 0 0 0 17.815 3.705 A 1.026 1.026 0 0 0 17.535 3.845 A 1.047 1.047 0 0 0 17.177 4.295 A 1.319 1.319 0 0 0 17.14 4.39 Q 17.258 4.466 17.432 4.513 A 1.668 1.668 0 0 0 17.5 4.53 Q 17.72 4.58 17.94 4.58 Q 18.262 4.58 18.488 4.46 Z" vector-effect="non-scaling-stroke"/></g></svg>
                       </div>

                    </div>
                </div>
            `);
        }
        console.log("anish yo function hit bhayo")
        clearInterval(intervalId); // Stop checking once the element is found and content is inserted

        // clearInterval(intervalId); // Stop checking once the element is found
    })
};
// // Use setInterval to keep checking until the element is loaded
// const intervalId = setInterval(findTargetDiv, 100); // Check every 1 second


// Function to start checking for the target div
const startFindingTargetDiv = () => {
    const intervalId = setInterval(() => {
        findTargetDiv(intervalId);
    }, 100); // Check every 100 milliseconds
};
startFindingTargetDiv();
// Event listener for the Compose button
const setupComposeButtonListener = () => {
    const composeButton = document.querySelector('div.T-I.T-I-KE.L3[role="button"][jscontroller="eIu7Db"]');
    if (composeButton) {
        composeButton.addEventListener('click', startFindingTargetDiv);
    } else {
        // Keep trying to add the listener until the Compose button is found
        setTimeout(setupComposeButtonListener, 500);
    }
};

// Start setting up the listener for the Compose button
setupComposeButtonListener();












































// Function to find the editable div and insert content when the signatures panel button is clicked
const findEditableDivAndInsertContent = () => {
    const editableDivs = document.querySelectorAll('div[class="aO7"]');
    editableDivs.forEach(editableDiv => {
        const innerDiv = editableDiv.querySelector('div[aria-label="Message Body"][contenteditable="true"]');
        if (innerDiv) {
            console.log("anish anish anish")
           innerDiv.insertAdjacentHTML("beforeend", `

        <div dir="ltr" style="color: rgb(0, 0, 0); font-family: Times; font-size: medium;">
        <table style="direction: ltr; border-collapse: collapse;">
            <tbody>
                <tr>
                    <td style="font-size: 0px; height: 12px; line-height: 0;"></td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 1234.18px;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="width: 1234.18px; line-height: normal;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p style="font-size: 17px; margin: 1px;">Kind regards,</p>
                                                        <p style="margin: 1px;"><img
                                                                src="https://cdn.gifo.wisestamp.com/apps/regards/a/Anish%20Shrestha/bas"
                                                                alt="Anish Shrestha" height="69" style="height: 69px;"></p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0.01px; padding-top: 16px; font-size: 1px;"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0"
                                            style="border-collapse: collapse; line-height: 1.15;">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="height: 1px; width: 81px; vertical-align: top; padding: 0.01px 1px;">
                                                        <table cellpadding="0" cellspacing="0"
                                                            style="border-collapse: collapse;">
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        style="vertical-align: top; padding: 0.01px 1px 0.01px 0.01px; width: 81px; text-align: center;">
                                                                        <img border="0"
                                                                            src="https://cdn.gifo.wisestamp.com/effect?static_effect_a=&amp;static_effect_b=&amp;animation=fade&amp;file_a=https://d36urhup7zbd7q.cloudfront.net/u/RM0g1l9yNem/2a91b905-bcf5-4cbe-958b-c1f1eb51787e__400x400__.png&amp;file_b=https://d36urhup7zbd7q.cloudfront.net/u/RM0g1l9yNem/2e474597-a8a7-4902-aac7-940545ca25fb__400x400__.jpeg"
                                                                            height="81" width="81" alt="photo"
                                                                            style="width: 81px; vertical-align: middle; border-radius: 50%; height: 81px; border: 0px; display: block;">
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td valign="top"
                                                        style="padding: 0.01px 0.01px 0.01px 18px; vertical-align: top;">
                                                        <table cellpadding="0" cellspacing="0"
                                                            style="border-collapse: collapse;">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="font-size: 18px; padding-bottom: 18px;">
                                                                        <p style="margin: 0.1px; line-height: 23.76px;">
                                                                            <span
                                                                                style="font-family: Arial; font-weight: bold; color: rgb(69, 102, 142); letter-spacing: 0px; text-wrap-mode: nowrap;">Anish
                                                                                Shrestha</span><br><span
                                                                                style="font-family: Arial; font-size: 14px; font-weight: bold; color: rgb(33, 33, 33); text-wrap-mode: nowrap;">Morelly®</span>
                                                                        </p>
                                                                    </td>
                                                                    <td style="vertical-align: bottom;">
                                                                        <table cellpadding="0" cellspacing="0" align="right"
                                                                            style="border-collapse: collapse;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style="padding: 0.01px 0.01px 18px 50px;">
                                                                                        <table border="0" cellpadding="0"
                                                                                            cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="left"
                                                                                                        style="padding-right: 6px; text-align: center; padding-top: 0px;">
                                                                                                        <p
                                                                                                            style="margin: 1px;">
                                                                                                            <a href="https://instagram.com/morellyau"
                                                                                                                target="_blank"
                                                                                                                rel="nofollow noreferrer"><img
                                                                                                                    width="25"
                                                                                                                    height="25"
                                                                                                                    src="https://cdn.gifo.wisestamp.com/s/inst/1f304a/50/0/border.png"
                                                                                                                    border="0"
                                                                                                                    alt="instagram"
                                                                                                                    style="float: left; border: none;"></a>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                    <td align="left"
                                                                                                        style="padding-right: 6px; text-align: center; padding-top: 0px;">
                                                                                                        <p
                                                                                                            style="margin: 1px;">
                                                                                                            <a href="https://facebook.com/Morelly®"
                                                                                                                target="_blank"
                                                                                                                rel="nofollow noreferrer"><img
                                                                                                                    width="25"
                                                                                                                    height="25"
                                                                                                                    src="https://cdn.gifo.wisestamp.com/s/fb/1f304a/50/0/border.png"
                                                                                                                    border="0"
                                                                                                                    alt="facebook"
                                                                                                                    style="float: left; border: none;"></a>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                    <td align="left"
                                                                                                        style="padding-right: 6px; text-align: center; padding-top: 0px;">
                                                                                                        <p
                                                                                                            style="margin: 1px;">
                                                                                                            <a href="https://us.linkedin.com/in/Morelly®"
                                                                                                                target="_blank"
                                                                                                                rel="nofollow noreferrer"><img
                                                                                                                    width="25"
                                                                                                                    height="25"
                                                                                                                    src="https://cdn.gifo.wisestamp.com/s/ld/1f304a/50/0/border.png"
                                                                                                                    border="0"
                                                                                                                    alt="linkedin"
                                                                                                                    style="float: left; border: none;"></a>
                                                                                                        </p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2"
                                                                        style="padding: 0.01px 0.01px 18px; border-bottom: 1px solid rgb(31, 48, 74); border-top: 1px solid rgb(31, 48, 74);">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            style="border-collapse: collapse; width: 281.211px;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td nowrap="" width="226"
                                                                                        style="padding-top: 18px; text-wrap-mode: nowrap; width: 226px; font-family: Arial;">
                                                                                        <p
                                                                                            style="margin: 1px; line-height: 11.88px; font-size: 12px;">
                                                                                            <img src="https://cdn.gifo.wisestamp.com/s/rfp3/45668E/26/trans.png"
                                                                                                width="12" alt="icon"
                                                                                                style="line-height: 14.4px; width: 12px;">&nbsp;<a
                                                                                                href="tel:1300208198"
                                                                                                target="_blank"
                                                                                                rel="nofollow noreferrer"
                                                                                                style="text-decoration: unset;"><span
                                                                                                    style="line-height: 14.4px; color: rgb(33, 33, 33);">1300
                                                                                                    208
                                                                                                    198</span></a>&nbsp;&nbsp;<img
                                                                                                src="https://cdn.gifo.wisestamp.com/s/rfw1/45668E/26/trans.png"
                                                                                                width="12" alt="icon"
                                                                                                style="line-height: 14.4px; width: 12px;">&nbsp;<a
                                                                                                href="https://morelly.com.au"
                                                                                                target="_blank"
                                                                                                rel="nofollow noreferrer"
                                                                                                style="text-decoration: unset;"><span
                                                                                                    style="line-height: 14.4px; color: rgb(33, 33, 33);">morelly.com.au</span></a>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td nowrap="" width="140"
                                                                                        style="padding-top: 10px; text-wrap-mode: nowrap; width: 140px; font-family: Arial;">
                                                                                        <p
                                                                                            style="margin: 1px; line-height: 11.88px; font-size: 12px;">
                                                                                            <img src="https://cdn.gifo.wisestamp.com/s/rfem1/45668E/26/trans.png"
                                                                                                width="12" alt="icon"
                                                                                                style="line-height: 14.4px; width: 12px;">&nbsp;<a
                                                                                                href="mailto:as@morelly.com.au"
                                                                                                target="_blank"
                                                                                                rel="nofollow noreferrer"
                                                                                                style="text-decoration: unset;"><span
                                                                                                    style="line-height: 14.4px; color: rgb(33, 33, 33);">as@morelly.com.au</span></a>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0.01px; padding-top: 16px; font-size: 1px;"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="width: 1234.18px; color: gray; border-top-width: 1px; border-top-style: solid; line-height: normal;">
                                            <tbody>
                                                <tr>
                                                    <td style="padding: 9px 8px 0px 0px;">
                                                        <p
                                                            style="color: rgb(136, 136, 136); font-size: 10px; margin: 1px; line-height: 12px; font-family: Arial;">
                                                            IMPORTANT: The contents of this email and any attachments are
                                                            confidential. They are intended for the named recipient(s) only.
                                                            If you have received this email by mistake, please notify the
                                                            sender immediately and do not disclose the contents to anyone or
                                                            make copies thereof.</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="line-height: 0.01px; padding-top: 16px; font-size: 1px;"></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="font-family: &quot;ws-id WryrYvo4PvDX&quot;; font-size: 0.01px; line-height: 0;">&nbsp;</td>
                </tr>
            </tbody>
        </table>
    </div>

        `);
    }})
};
// Event listener for the signatures panel button
const setupSignaturesPanelButtonListener = () => {
    const signaturesPanelButton = document.querySelector('div.signatures-panel-button.ws-active[data-v-83acab]');
    if (signaturesPanelButton) {
        signaturesPanelButton.addEventListener('click', findEditableDivAndInsertContent);
    } else {
        // Keep trying to add the listener until the signatures panel button is found
        setTimeout(setupSignaturesPanelButtonListener, 500);
    }
};
// Start setting up the listener for the signatures panel button
setupSignaturesPanelButtonListener();



