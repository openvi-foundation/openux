import type { Preset } from '@openuxkit/themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@openuxkit/themes/lara/accordion';
import autocomplete from '@openuxkit/themes/lara/autocomplete';
import avatar from '@openuxkit/themes/lara/avatar';
import badge from '@openuxkit/themes/lara/badge';
import base from '@openuxkit/themes/lara/base';
import blockui from '@openuxkit/themes/lara/blockui';
import breadcrumb from '@openuxkit/themes/lara/breadcrumb';
import button from '@openuxkit/themes/lara/button';
import card from '@openuxkit/themes/lara/card';
import carousel from '@openuxkit/themes/lara/carousel';
import cascadeselect from '@openuxkit/themes/lara/cascadeselect';
import checkbox from '@openuxkit/themes/lara/checkbox';
import chip from '@openuxkit/themes/lara/chip';
import colorpicker from '@openuxkit/themes/lara/colorpicker';
import confirmdialog from '@openuxkit/themes/lara/confirmdialog';
import confirmpopup from '@openuxkit/themes/lara/confirmpopup';
import contextmenu from '@openuxkit/themes/lara/contextmenu';
import datatable from '@openuxkit/themes/lara/datatable';
import dataview from '@openuxkit/themes/lara/dataview';
import datepicker from '@openuxkit/themes/lara/datepicker';
import dialog from '@openuxkit/themes/lara/dialog';
import divider from '@openuxkit/themes/lara/divider';
import dock from '@openuxkit/themes/lara/dock';
import drawer from '@openuxkit/themes/lara/drawer';
import editor from '@openuxkit/themes/lara/editor';
import fieldset from '@openuxkit/themes/lara/fieldset';
import fileupload from '@openuxkit/themes/lara/fileupload';
import floatlabel from '@openuxkit/themes/lara/floatlabel';
import galleria from '@openuxkit/themes/lara/galleria';
import iconfield from '@openuxkit/themes/lara/iconfield';
import iftalabel from '@openuxkit/themes/lara/iftalabel';
import image from '@openuxkit/themes/lara/image';
import imagecompare from '@openuxkit/themes/lara/imagecompare';
import inlinemessage from '@openuxkit/themes/lara/inlinemessage';
import inplace from '@openuxkit/themes/lara/inplace';
import inputchips from '@openuxkit/themes/lara/inputchips';
import inputgroup from '@openuxkit/themes/lara/inputgroup';
import inputnumber from '@openuxkit/themes/lara/inputnumber';
import inputotp from '@openuxkit/themes/lara/inputotp';
import inputtext from '@openuxkit/themes/lara/inputtext';
import knob from '@openuxkit/themes/lara/knob';
import listbox from '@openuxkit/themes/lara/listbox';
import megamenu from '@openuxkit/themes/lara/megamenu';
import menu from '@openuxkit/themes/lara/menu';
import menubar from '@openuxkit/themes/lara/menubar';
import message from '@openuxkit/themes/lara/message';
import metergroup from '@openuxkit/themes/lara/metergroup';
import multiselect from '@openuxkit/themes/lara/multiselect';
import orderlist from '@openuxkit/themes/lara/orderlist';
import organizationchart from '@openuxkit/themes/lara/organizationchart';
import overlaybadge from '@openuxkit/themes/lara/overlaybadge';
import paginator from '@openuxkit/themes/lara/paginator';
import panel from '@openuxkit/themes/lara/panel';
import panelmenu from '@openuxkit/themes/lara/panelmenu';
import password from '@openuxkit/themes/lara/password';
import picklist from '@openuxkit/themes/lara/picklist';
import popover from '@openuxkit/themes/lara/popover';
import progressbar from '@openuxkit/themes/lara/progressbar';
import progressspinner from '@openuxkit/themes/lara/progressspinner';
import radiobutton from '@openuxkit/themes/lara/radiobutton';
import rating from '@openuxkit/themes/lara/rating';
import ripple from '@openuxkit/themes/lara/ripple';
import scrollpanel from '@openuxkit/themes/lara/scrollpanel';
import select from '@openuxkit/themes/lara/select';
import selectbutton from '@openuxkit/themes/lara/selectbutton';
import skeleton from '@openuxkit/themes/lara/skeleton';
import slider from '@openuxkit/themes/lara/slider';
import speeddial from '@openuxkit/themes/lara/speeddial';
import splitbutton from '@openuxkit/themes/lara/splitbutton';
import splitter from '@openuxkit/themes/lara/splitter';
import stepper from '@openuxkit/themes/lara/stepper';
import steps from '@openuxkit/themes/lara/steps';
import tabmenu from '@openuxkit/themes/lara/tabmenu';
import tabs from '@openuxkit/themes/lara/tabs';
import tabview from '@openuxkit/themes/lara/tabview';
import tag from '@openuxkit/themes/lara/tag';
import terminal from '@openuxkit/themes/lara/terminal';
import textarea from '@openuxkit/themes/lara/textarea';
import tieredmenu from '@openuxkit/themes/lara/tieredmenu';
import timeline from '@openuxkit/themes/lara/timeline';
import toast from '@openuxkit/themes/lara/toast';
import togglebutton from '@openuxkit/themes/lara/togglebutton';
import toggleswitch from '@openuxkit/themes/lara/toggleswitch';
import toolbar from '@openuxkit/themes/lara/toolbar';
import tooltip from '@openuxkit/themes/lara/tooltip';
import tree from '@openuxkit/themes/lara/tree';
import treeselect from '@openuxkit/themes/lara/treeselect';
import treetable from '@openuxkit/themes/lara/treetable';
import virtualscroller from '@openuxkit/themes/lara/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<LaraBaseDesignTokens>;
