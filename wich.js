#!/usr/bin/env node

import { execSync } from 'child_process'

function wich (input) {
  try {
    return execSync(
      `which ${input}`,
      { encoding: 'utf8' }
    )
  } catch {
    return ''
  }
}

const input = process.argv.slice(2)
if (input.length) process.stdout.write(wich(input[0]))
