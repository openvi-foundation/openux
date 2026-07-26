#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run setup && \
        cd apps/showcase && pnpm link @openuxkit/styled @openuxkit/styles @openuxkit/themes @openuxkit/utils @openuxkit/motion --global && \
        cd ../../packages/themes && pnpm link @openuxkit/themes @openuxkit/styles --global && \
        cd ../primeng && pnpm link @openuxkit/styled @openuxkit/styles @openuxkit/themes @openuxkit/utils @openuxkit/motion --global
        ;;
    vue)
        cd submodules/primevue && pnpm run setup && \
        cd apps/showcase && pnpm link @openuxkit/themes @openuxkit/styles --global && \
        cd ../../packages/core && pnpm link @openuxkit/styled @openuxkit/utils --global && \
        cd ../themes && pnpm link @openuxkit/themes @openuxkit/styles --global && \
        cd ../primevue && pnpm link @openuxkit/styled @openuxkit/styles @openuxkit/themes @openuxkit/utils --global && \
        cd ../forms && pnpm link @openuxkit/forms @openuxkit/utils --global
        ;;
    react)
        cd submodules/primereact && pnpm run setup && \
        cd apps/showcase && pnpm link @openuxkit/styled @openuxkit/styles @openuxkit/themes @openuxkit/motion --global && \
        cd ../../packages/core && pnpm link @openuxkit/styled @openuxkit/utils --global && \
        cd ../headless && pnpm link @openuxkit/styled @openuxkit/utils --global && \
        cd ../hooks && pnpm link @openuxkit/utils --global && \
        cd ../primereact && pnpm link @openuxkit/styled @openuxkit/styles @openuxkit/utils @openuxkit/motion --global && \
        cd ../styles && pnpm link @openuxkit/styled @openuxkit/styles @openuxkit/utils --global && \
        cd ../types && pnpm link @openuxkit/styled --global
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        exit 1
        ;;
esac
