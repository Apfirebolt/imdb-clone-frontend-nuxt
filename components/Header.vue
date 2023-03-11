<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="toggleMobileMenu()"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
              @click="openNestedMenu()"
            >
              <span>Actions</span>

              <svg
                class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="isNestedMenuOpened"
                class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                  >
                    <NuxtLink to="/movie"
                      
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: outline/chart-bar -->
                      <svg
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Movie
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Save Movies to be added later to watchlist
                        </p>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/watchlist"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <!-- Heroicon name: outline/view-grid -->
                      <svg
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Watch List
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Create your own watchlist
                        </p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <NuxtLink
            to="/"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Home
          </NuxtLink>
        </nav>
        <div v-if="profileData" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <button @click="logOutUtil" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Log Out</button>
        </div>
        <div v-else class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <NuxtLink to="/login" 
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >Sign In</NuxtLink>
          
          <NuxtLink to="/register"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          > Sign Up</NuxtLink>
        </div>
      </div>
    </div>
  
    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isMobileMenuOpened"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  @click="toggleMobileMenu()"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Movie
                  </span>
                </a>

                <a
                  href="#"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <!-- Heroicon name: outline/refresh -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span
                    @click="toggleNestedMobileMenu()"
                    class="ml-3 relative text-base font-medium text-gray-900"
                  >
                    Watch List
                  </span>
                </a>
                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-class="translate-y-1"
                  enter-to-class="translate-y-0"
                  leave-active-class="transition ease-in duration-250"
                  leave-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-3"
                >
                  <ul
                    v-if="nestedMobileMenu"
                    class="z-40 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transform px-2"
                  >
                    <a
                      href="#"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <!-- Heroicon name: outline/refresh -->
                      <svg
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span
                        @click="toggleNestedMobileMenu()"
                        class="ml-3 relative text-base font-medium text-gray-900"
                      >
                        Machine
                      </span>
                    </a>
                    <li
                      class="hover:text-blue-500 hover:pointer text-center p-3"
                    >
                      Menu
                    </li>
                  </ul>
                </transition>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      isNestedMenuOpened: false,
      isMobileMenuOpened: false,
      nestedMobileMenu: false,
    };
  },
  mounted() {
    // If token is not available in store, use token available in local storage and authenticate
    if (!this.profileData) {
      this.getUserProfile()
    }
  },
  computed: {
    ...mapGetters({
      profileData: "auth/getProfileData"
    })
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logOutAction",
      getUserProfile: "auth/getProfileDataAction"
    }),
    openNestedMenu() {
      this.isNestedMenuOpened = !this.isNestedMenuOpened;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
    },
    toggleNestedMobileMenu() {
      this.nestedMobileMenu = !this.nestedMobileMenu;
    },
    logOutUtil() {
      this.logoutAction();
    }
  },
};
</script>
