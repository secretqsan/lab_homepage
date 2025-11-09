<template>
  <footer class="bg-gradient-to-br from-black to-blue-900 text-white py-12 px-8 flex items-center flex-col">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-blue-800/50">
      <div>
        <h3 class="text-2xl font-bold mb-4 text-blue-400">{{ $t('quickLinks') }}</h3>
        <ul class="space-y-2 text-gray-300">
          <li>
            <a href="/news" class="hover:text-blue-400">
              {{ $t("searchField") }}
            </a>
          </li>
          <li>
            <a href="/news" class="hover:text-blue-400">
              {{ $t("news") }}
            </a>
          </li>
          <li>
            <a href="/members" class="hover:text-blue-400">
              {{ $t("members") }}
            </a>
          </li>
          <li>
            <a href="/publications" class="hover:text-blue-400">
              {{ $t("publications") }}
            </a>
          </li>
          <li>
            <a href="/join" class="hover:text-blue-400">
              {{ $t("joinUs") }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4 text-blue-400">{{ $t('friendlyLinks') }}</h3>
        <ul class="space-y-2 text-gray-300">
          <li>
            <a href="https://www.jlu.edu.cn" target="_blank" class="hover:text-blue-400">
              {{ $t('jilinUniversity') }}
            </a>
          </li>
          <li>
            <a href="https://supramol.jlu.edu.cn/index.htm" target="_blank" class="hover:text-blue-400">
              {{ $t('supramolecularLab') }}
            </a>
          </li>
          <li>
            <a href="https://chem.jlu.edu.cn/" target="_blank" class="hover:text-blue-400">
              {{ $t('collegeOfChemistry') }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4 text-blue-400">{{ $t('contactUs') }}</h3>
        <ul class="space-y-2 text-gray-300">
          <li class="flex items-center gap-1">
            <div class="text-blue-400 pi pi-map-marker"></div>
            <span>{{ $t('labAddressFooter') }}：{{ $t('labAddressDetail') }}</span>
          </li>
          <li class="flex items-center gap-1">
            <div class="text-blue-400 pi pi-envelope"></div>
            <span>{{ $t('emailAddress') }}：<a href="mailto:{{ contactEmail }}">{{ replaceAt(contactEmail) }}</a></span>
          </li>
          <li class="flex items-center gap-1">
            <div class="text-blue-400 pi pi-phone"></div>
            <span>{{ $t('contactNumberFooter') }}：{{ contactPhone }}</span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- 版权信息 -->
    <div class="text-left text-gray-400 text-sm flex flex-col items-center">
      <p>© {{ new Date().getFullYear() }} {{ $t('copyrightInfo') }}</p>
      <p class="mt-1">All Rights Reserved</p>
    </div>
  </footer>
</template>