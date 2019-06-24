<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/expressions">expressions</router-link>
        </li>
        <li>
          <router-link to="/directives">directives</router-link>
        </li>
        <li>
          <router-link to="/filters">filters</router-link>
        </li>
        <li>
          <router-link to="/conditional">conditional</router-link>
        </li>
        <li>
          <router-link to="/repeat">repeat</router-link>
        </li>
        <li>
          <router-link to="/data">data</router-link>
        </li>
        <li>
          <router-link to="/events">events</router-link>
        </li>
        <li>
          <router-link to="/lifecycle">lifecycle</router-link>
        </li>
        <li>
          <router-link to="/errors">errors</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
