/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `airports` command */
  export type Airports = ExtensionPreferences & {}
  /** Preferences accessible in the `airlines` command */
  export type Airlines = ExtensionPreferences & {}
  /** Preferences accessible in the `aircraft` command */
  export type Aircraft = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `airports` command */
  export type Airports = {}
  /** Arguments passed to the `airlines` command */
  export type Airlines = {}
  /** Arguments passed to the `aircraft` command */
  export type Aircraft = {}
}


declare module "swift:*" {
  function run<T = unknown, U = any>(command: string, input?: U): Promise<T>;
  export default run;
	export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}
